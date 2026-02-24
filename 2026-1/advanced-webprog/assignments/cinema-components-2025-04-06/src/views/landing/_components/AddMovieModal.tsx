import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormLabel,
} from "@/components/ui/form";
import { Plus, X, Save, Upload } from "lucide-react";

export function AddMovieModal() {
  const form = useForm({
    defaultValues: {
      title: "",
      duration: "",
      director: "",
      genre: "",
      release_year: "",
      description: ""
    }
  });
  
  return (
    <div >
      <div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Add Movie
        </Button>
      </div>
      <div 
        className="sm:max-w-[700px] overflow-y-auto h-[90vh]"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </div>
        <div className="pb-3 mb-3 border-b bg-background">
          <h2 className="text-xl">Add New Movie</h2>
        </div>
        
        <Form {...form}>
          {/* First row - Title and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Movie title" />
            </div>
            
            <div>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input type="number" placeholder="120" />
            </div>
          </div>
          
          {/* Second row - Movie Poster (full width) */}
          <div className="space-y-2 w-full">
            <FormLabel htmlFor="image">Movie Poster</FormLabel>
            <div 
              className="border-2 border-dashed rounded-md p-4 border-gray-300 hover:border-primary transition-colors"
            >
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="hidden"
              />
              <div 
                className="flex flex-col items-center justify-center py-6 cursor-pointer"
              >
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload poster image</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF (max 5MB)</p>
              </div>
            </div>
          </div>
          
          {/* Third row - Director, Genre, Release Year */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <FormLabel>Director</FormLabel>
              <Input placeholder="Director name" />
            </div>
            
            <div>
              <FormLabel>Genre</FormLabel>
              <Input placeholder="Action, Drama, etc." />
            </div>
            
            <div>
              <FormLabel>Release Year</FormLabel>
              <Input placeholder="2023" />
            </div>
          </div>
          
          {/* Fourth row - Description */}
          <div className="grid grid-cols-1">
            <div>
              <FormLabel>Description</FormLabel>
              <Textarea rows={4} placeholder="Movie description..." />
            </div>
          </div>
          
          {/* Action buttons in a separate row */}
          <div className="flex justify-end gap-4 mt-8 pt-4 border-t">
            <div >
              <Button 
                variant="outline" 
                type="button"
                size="default"
                className="min-w-[120px] h-12 text-base"
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button 
                type="button" 
                size="default"
                className="min-w-[140px] h-12 text-base gap-2"
              >
                <Save className="h-5 w-5" />
                Add Movie
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
} 