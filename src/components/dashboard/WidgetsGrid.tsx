'use client';

import React from 'react'
import { SimpleWidget } from "@/components";
import { IoCafeOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count);

    return (
        <div className="flex flex-wrap p-2 ">
            <SimpleWidget
                title={count}
                subtitle='Productos agregados'
                icon={<IoCafeOutline size={40} className='text-pink-600' />}
                label='Contador'
                href="/dashboard/counter"
            />
        </div>
    )
}
