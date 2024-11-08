import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({auth}) {
    return (
        <AuthenticatedLayout>
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        </AuthenticatedLayout>
    )
}