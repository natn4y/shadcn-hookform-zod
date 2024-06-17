import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const productsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
});

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>

export function ProductsFilters() {
  const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema)
  });

  function handleFilterProducts(data: ProductsFiltersSchema) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleFilterProducts)} className='flex flex-col md:flex-row md:items-center gap-2'>
      <Input {...register('id')} placeholder='ID do Pedido' className='w-auto'></Input>
      <Input {...register('name')} placeholder='Nome do produto' className='w-auto'></Input>
      <Button type='submit' variant={'link'}>
        <Search className='w-4 h-4 mr-2' />
        Filtrar Resultados
      </Button>
    </form>
  )
}