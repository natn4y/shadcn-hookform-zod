'use client'
import { CreateProductDialog } from '@/components/create-product-dialog';
import { ProductsFilters } from '@/components/products-filters';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className='p-6 max-w-4xl mx-auto space-y-4'>
      <h1 className='text-3xl font-bold'>Produtos</h1>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <ProductsFilters />
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2' />
              Novo Produto
            </Button>
          </DialogTrigger>
          <CreateProductDialog />
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
