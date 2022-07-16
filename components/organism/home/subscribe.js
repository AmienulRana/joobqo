import Input from '../../element/input/input';
import Button from '../../element/button/button';
export default function Subscribe(){
    return(
        <>
            <h1 className="lg:text-4xl text-2xl text-center mb-4 text-white font-bold">Subscribe to Our Newsletter to Stay Updated</h1>
            <div className="relative md:w-1/3 w-11/12">
                <Input className="w-full h-14 rounded-md px-4" placeholder="Enter Email Addres Here" type="text" />
                <Button background="gradient" classNameProps="absolute top-1/2 right-4 -translate-y-1/2">
                    Subscribe
                </Button>
            </div>
        </>
    )
}