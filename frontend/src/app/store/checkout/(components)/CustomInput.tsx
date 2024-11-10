import { Input } from '@/components/ui/input';
import React from 'react';

export default function CustomInput({ title }: { title: string }) {
  return (
    <div>
      <h3 className="font-light text-sm">{title}</h3>
      <Input></Input>
    </div>
  );
}
