import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import HomeHero from "./partials/HomeHero";







export default function Home({}:{}) {


    return (
        <>
            <AppLayout>
                <Head title="Home" />
                <div className="">
                    <HomeHero/>
                    {/* <MiddleSection /> */}
                </div>
            </AppLayout>

        </>
    );
}
