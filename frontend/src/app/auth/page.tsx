import { Button } from '@/components/ui/button';
import Image from 'next/image';
import main_logo from '../../../public/furniro_assets/Meubel House_Logos-05.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Auth() {
  return (
    <main className="flex w-full overflow-y-hidden justify-center md:justify-between items-center">
      <div className="w-full md:w-1/2 px-10 py-28 flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="flex gap-4 items-center">
              <Image src={main_logo} alt="main_logo" className="w-16 h-12" />
              <div className="font-bold text-5xl text-wood">FURNIO</div>
            </CardTitle>
            <CardDescription>
              Transform Your Space with the Perfect Furniture –
            </CardDescription>
            <div className="py-4 font-medium text-2xl text-gray-700">
              Sign In
            </div>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col justify-center gap-5">
            <Button asChild className='w-1/3'>
              <Link href="/login">Login</Link>
            </Button>
            <div className='text-gray-600'>Don&apos;t have an account? <span className='text-wood hover:cursor-pointer'>Sign Up </span></div>
          </CardFooter>
        </Card>
      </div>
      <div className=" hidden sm:block w-1/2">art</div>
    </main>
  );
}
