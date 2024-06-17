'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DialogClose } from '@radix-ui/react-dialog';
import { Search, PlusCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className='p-6 max-w-4xl mx-auto space-y-4'>
      <h1 className='text-3xl font-bold'>Produtos</h1>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <form className='flex flex-col md:flex-row md:items-center gap-2'>
          <Input name='id' placeholder='ID do Pedido' className='w-auto'></Input>
          <Input name='name' placeholder='Nome do produto' className='w-auto'></Input>
          <Button type='submit' variant={'link'}>
            <Search className='w-4 h-4 mr-2' />
            Filtrar Resultados
          </Button>
        </form>

        <Dialog>

          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2' />
              Novo Produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>
                Criar um novo produto no sistema
              </DialogDescription>
            </DialogHeader>

            <form className='space-y-6'>
              <div className='flex items-center md:text-right gap-3'>
                <Label className='min-w-[80px]' htmlFor='name'>Produto</Label>
                <Input className='col-span-3' id='name'></Input>
              </div>

              <div className='flex items-center md:text-right gap-3'>
                <Label className='min-w-[80px]' htmlFor='price'>Preço</Label>
                <Input className='w-full col-span-3' id='price'></Input>
              </div>

              <DialogFooter className='gap-3 md:gap-0'>
                <DialogClose asChild>
                  <Button type='button' variant={'outline'}>Cancelar</Button>
                </DialogClose>
                <Button type='submit'>Salvar</Button>
              </DialogFooter>

            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className='border rounded-lg p-2'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>134131413</TableCell>
                  <TableCell>Produto {i + 1}</TableCell>
                  <TableCell>R$ 192,00</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
