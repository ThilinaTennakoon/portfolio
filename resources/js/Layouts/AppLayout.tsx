import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Header from "@/Components/Shared/Header";

export default function AppLayout(
    {
        children,
        isFooter = true,
        isHeader = true,

    }: {
        children: React.ReactNode,
        isFooter?: boolean,
        isHeader?: boolean,
    }) {
    const appName = import.meta.env.VITE_APP_NAME || "Linkskill";
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            {/* {isHeader &&
                <Header appName={appName} />
            } */}
            <Header />

            {/* Hero section */}
            <main className="">{children}</main>

            {/* Footer */}
            {/* {isFooter &&
            <Footer />} */}

            {/* <FlashAlerts flash={flash} /> */}

        </div>
    );
}
