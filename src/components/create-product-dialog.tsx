import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogClose } from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';

const createProductSchema = z.object({
  name: z.string(),
  price: z.coerce.string(),
});

type CreateProductSchema = z.infer<typeof createProductSchema>;

export function CreateProductDialog() {
  const { register, handleSubmit } = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
  })

  function handleCreateProduct(data: CreateProductSchema) {
    console.log(data);
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo Produto</DialogTitle>
        <DialogDescription>
          Criar um novo produto no sistema
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleCreateProduct)} className='space-y-6'>
        <div className='flex items-center md:text-right gap-3'>
          <Label className='min-w-[80px]' htmlFor='name'>Produto</Label>
          <Input {...register('name')} className='col-span-3' ></Input>
        </div>

        <div className='flex items-center md:text-right gap-3'>
          <Label className='min-w-[80px]' htmlFor='price'>Preço</Label>
          <Input {...register('price')} className='w-full col-span-3' id='price'></Input>
        </div>

        <DialogFooter className='gap-3 md:gap-0'>
          <DialogClose asChild>
            <Button type='button' variant={'outline'}>Cancelar</Button>
          </DialogClose>
          <Button type='submit'>Salvar</Button>
        </DialogFooter>

      </form>
    </DialogContent>
  )
}