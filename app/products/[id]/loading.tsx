export default function LoadingProductDetails() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-20 text-center text-slate-200">
            <div className="w-full flex items-center justify-center py-10">
                <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>

            <h2 className="text-xl text-slate-400 mt-6">
                Loading product details...
            </h2>
        </div>
    );
}
