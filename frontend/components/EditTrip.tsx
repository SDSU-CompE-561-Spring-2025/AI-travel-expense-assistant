"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import { Trip } from "@/hooks/useTrips"
import { useParams, useRouter } from "next/navigation"

interface EditTripProps {
  mode: 'edit' | 'create'; // The mode prop, either 'edit' or 'create'
}

//This form was made from shadecn's form builder
const formSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1),
  description: z.string(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date()
});

export default function MyForm({ mode }: EditTripProps) {
  const navigate = useRouter();

  const params = useParams();
  const tripId = Number(params.id);
  const [token, setToken] = useState<string | null>("");
  const [trip,setTrip] = useState<Trip>({
    id: tripId,
    title: "",
    description: "",
    start_date: new Date(),
    end_date: new Date()
  });
  
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: mode === 'edit' ? {
      id: trip.id,
      title: trip.title,
      description: trip.description,
      start_date: trip.start_date,
      end_date: trip.end_date
    } : {
      title: "",
      description: "",
      start_date: new Date(),
      end_date: new Date()
    }
  })

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    setToken(storedToken);
  }, []);
  
  useEffect(() => {
    if (!token) return;
  
    const fetchTrip = async () => {
      if(!token || mode ==='create') return;
      try {
        let response;
        const tripData = {
          title: trip.title,
          description: trip.description,
          start_date: trip.start_date,
          end_date: trip.end_date,
        };
    
        if (mode === 'edit') {
          response = await fetch(`http://localhost:8000/trip/trips/${trip.id}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              "Origin": "http://localhost:3000",
              'Content-Type': 'application/json',
            },
          });
        
    
          // Check if the response is valid
          if (!response || !response.ok) {
            console.error("Failed to fetch data or invalid response", response);
            return; // Exit if there's an error in the response
          }
    
          // If response is successful, parse the response body
          const oldTrip = await response.json();
          const parsedTrip = { ...oldTrip, start_date: new Date(oldTrip.start_date), end_date: new Date(oldTrip.end_date) };
        
          // Reset the form with the fetched data
          form.reset(parsedTrip);
    
          // Ensure the start and end date are valid
          const startDate = oldTrip.start_date ? new Date(oldTrip.start_date) : new Date();
          const endDate = oldTrip.end_date ? new Date(oldTrip.end_date) : new Date();
          
          // Check for invalid dates
          if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            console.error('Invalid start or end date');
            return;
          }
    
          form.reset({
            id: oldTrip.id,
            title: oldTrip.title,
            description: oldTrip.description,
            start_date: new Date(oldTrip.start_date),
            end_date: new Date(oldTrip.end_date),
          });
        }
      } catch (err) {
        console.error("Failed to fetch trip", err);
      }
    };
    
  
    fetchTrip();
  }, [token, form, tripId]);
  

  async function onSubmit(values: z.infer < typeof formSchema > ) {
    try{
      const formattedStartDate = values.start_date.toISOString().split('T')[0]; // "YYYY-MM-DD"
      const formattedEndDate = values.end_date.toISOString().split('T')[0]; // "YYYY-MM-DD"

      const formattedValues = {
        ...values,
        start_date: formattedStartDate,
        end_date: formattedEndDate
      };

      let response;
      if(mode === 'edit'){
        response = await fetch(`http://localhost:8000/trip/trips/edit-trip/${trip.id}`, {
          method: "PATCH",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Origin": "http://localhost:3000",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: values.title,
            description: values.description,
            start_date: values.start_date.toISOString().split('T')[0], // e.g. "2024-05-01"
            end_date: values.end_date.toISOString().split('T')[0],
          })
        });
        
      }else if(mode ==='create'){
        response = await fetch(`http://localhost:8000/trip/new`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Origin": "http://localhost:3000",
            "Content-Type": "application/json"},
          body: JSON.stringify(formattedValues)
        });
      }
      
      if (!response || !response.ok) {
        console.error("Failed to fetch data or invalid response", response);
        return; // Exit if there's an error in the response
      }
        const data = await response.json();
        navigate.push(`/edit-trip/${data.id}`)
      }catch(error){
        console.error("Error while updating trip:", error);
      }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-4">
            
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input                 
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
      <FormField
      control={form.control}
      name="start_date"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Start Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
       
          <FormMessage />
        </FormItem>
      )}
    />
          </div>
          
          <div className="col-span-6">
            
      <FormField
      control={form.control}
      name="end_date"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>End Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
       
          <FormMessage />
        </FormItem>
      )}
    />
          </div>
          
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}