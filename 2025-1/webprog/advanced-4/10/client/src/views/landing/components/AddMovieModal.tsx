import { useState, useRef, useEffect } from 'react';
import { z } from 'zod';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Plus, X, Save, Upload } from "lucide-react";
import { addMovie } from '@/services/useMovies';

// Define the validation schema with Zod
const movieSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  director: z.string().min(1, { message: "Director is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  release_year: z.string().min(1, { message: "Release year is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
});

// Define type from Zod schema
type MovieFormValues = z.infer<typeof movieSchema>;

export function AddMovieModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Initialize form with useForm and Zod resolver
  const form = useForm<MovieFormValues>({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      title: '',
      director: '',
      genre: '',
      release_year: '',
      description: '',
      duration: '',
    },
  });

  // Store the image separately as it's not part of the Zod schema
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check if file is an image
      if (!selectedFile.type.startsWith('image/')) {
        setImageError('Please select an image file');
        setImage(null);
        setPreviewUrl(null);
        return;
      }
      
      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setImageError('Image size should not exceed 5MB');
        setImage(null);
        setPreviewUrl(null);
        return;
      }
      
      // Clear any previous error
      setImageError(null);
      setImage(selectedFile);
      
      // Clean up previous preview URL if exists
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      
      // Create a preview URL
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    }
  };

  const handleSelectFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const addMovieMutation = useMutation({
    mutationFn: (data: FormData) => {
        const response = addMovie(data)
        console.log(response)
        return response
    },
    onSuccess: () => {
      toast.success('Movie added successfully');
      form.reset();
      setImage(null);
      setPreviewUrl(null);
      setImageError(null);
      setOpen(false);
    },
    /* onError: (error: any) => {
      console.error('Error adding movie:', error.response?.data);
      if (error.response?.data?.errors) {
        // Set form errors from API response
        const apiErrors = error.response.data.errors;
        Object.keys(apiErrors).forEach((key) => {
          if (key === 'image') {
            setImageError(Array.isArray(apiErrors[key]) ? apiErrors[key][0] : apiErrors[key]);
          } else if (key in form.formState.errors) {
            form.setError(key as keyof MovieFormValues, {
              type: 'server',
              message: Array.isArray(apiErrors[key]) ? apiErrors[key][0] : apiErrors[key],
            });
          }
        });
        toast.error('Failed to add movie. Please check the form for errors.');
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to add movie. Please try again.');
      }
    } */
  });

  const onSubmit = (values: MovieFormValues) => {
    // Validate required fields including image
    let hasError = false;
    
    // Reset any previous image error
    setImageError(null);
    
    // Validate image
    if (!image) {
      setImageError('The image field is required.');
      hasError = true;
    }
    
    if (hasError) {
      // If there's an error, scroll to the image input area
      setTimeout(() => {
        const imageElement = document.getElementById('image')?.parentElement;
        if (imageElement) {
          imageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return;
    }

    try {
      // Create FormData for file upload
      const formData = new FormData();
      
      // Append all form values
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Append the image file with the correct field name
      if (image) {
        formData.append('image', image);
        
        // Log the FormData contents for debugging
        console.log('Form data entries:');
        for (let pair of formData.entries()) {
          console.log(pair[0] + ': ' + (pair[1] instanceof File ? pair[1].name : pair[1]));
        }
      }
      
      // Submit the form
      addMovieMutation.mutate(formData);
    } catch (error) {
      console.error('Error preparing form data:', error);
      toast.error('An error occurred while preparing your submission.');
    }
  };

  // Clean up preview URL when component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Reset the scroll position when the dialog opens
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    // Reset scroll position to top when dialog opens
    if (open) {
      setTimeout(() => {
        if (dialogRef.current) {
          dialogRef.current.scrollTop = 0;
        }
      }, 10);
    } else {
      // Reset form when dialog closes
      form.reset();
      setImage(null);
      setPreviewUrl(null);
      setImageError(null);
    }
  };

  // Effect to scroll to top when dialog opens
  useEffect(() => {
    if (open && dialogRef.current) {
      dialogRef.current.scrollTop = 0;
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Add Movie
        </Button>
      </DialogTrigger>
      <DialogContent 
        ref={dialogRef}
        className="sm:max-w-[700px] overflow-y-auto h-[90vh]"
        style={{ scrollbarWidth: 'thin' }}
      >
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="pb-3 mb-3 border-b bg-background">
          <DialogTitle className="text-xl">Add New Movie</DialogTitle>
        </DialogHeader>
        
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* First row - Title and Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }: { field: ControllerRenderProps<MovieFormValues, "title"> }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="duration"
                render={({ field }: { field: ControllerRenderProps<MovieFormValues, "duration"> }) => (
                  <FormItem>
                    <FormLabel>Duration (minutes)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Second row - Movie Poster (full width) */}
            <div className="space-y-2 w-full">
              <FormLabel htmlFor="image">Movie Poster</FormLabel>
              <div 
                className={`border-2 border-dashed rounded-md p-4 ${
                  imageError ? 'border-red-500 bg-red-50/10' : 'border-gray-300'
                } hover:border-primary transition-colors`}
              >
                <input
                  ref={fileInputRef}
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {previewUrl ? (
                  <div className="flex flex-col items-center">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-h-48 object-contain mb-2" 
                    />
                    <div className="flex gap-2">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={handleSelectFile}
                      >
                        Change
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setImage(null);
                          setPreviewUrl(null);
                          setImageError(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="flex flex-col items-center justify-center py-6 cursor-pointer"
                    onClick={handleSelectFile}
                  >
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Click to upload poster image</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF (max 5MB)</p>
                  </div>
                )}
              </div>
              {imageError && (
                <p className="text-sm text-red-500">{imageError}</p>
              )}
            </div>
            
            {/* Third row - Director, Genre, Release Year */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="director"
                render={({ field }: { field: ControllerRenderProps<MovieFormValues, "director"> }) => (
                  <FormItem>
                    <FormLabel>Director</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="genre"
                render={({ field }: { field: ControllerRenderProps<MovieFormValues, "genre"> }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="release_year"
                render={({ field }: { field: ControllerRenderProps<MovieFormValues, "release_year"> }) => (
                  <FormItem>
                    <FormLabel>Release Year</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Fourth row - Description */}
            <div className="grid grid-cols-1">
              <FormField
                control={form.control}
                name="description"
                render={({ field }: { field: ControllerRenderProps<MovieFormValues, "description"> }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Action buttons in a separate row */}
            <div className="flex justify-end gap-4 mt-8 pt-4 border-t">
              <DialogClose asChild>
                <Button 
                  variant="outline" 
                  type="button"
                  size="default"
                  className="min-w-[120px] h-12 text-base"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button 
                type="submit" 
                size="default"
                className="min-w-[140px] h-12 text-base gap-2"
                disabled={addMovieMutation.isPending}
              >
                <Save className="h-5 w-5" />
                {addMovieMutation.isPending ? 'Adding...' : 'Add Movie'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 