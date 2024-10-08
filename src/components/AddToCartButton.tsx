"use client";
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';
import { Product } from '@/payload-types';

const AddToCartButton = ({product}: {product: Product}) => {
    const {addItem} = useCart();
    const [isSucess, setIsSuccess] = useState<boolean>(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false);
        }, 2000);

        return () => clearTimeout(timeout);
    },[isSucess])
  return (
    <Button 
    onClick={() => 
    {
        addItem(product)
        setIsSuccess(true)
    }} size='lg' className='w-full'>
        {isSucess ? 'Added!' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton;