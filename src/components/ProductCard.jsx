import Link from "next/link";
import Image from "next/image";

export default function ProductCard({product}) {
    const {title, slug, thumbnail, details} = product.fields;
    
    return (
        <div>
            <div className="h-80">
                <Image 
                    src={`https:${thumbnail.fields.file.url}`}
                    alt="Thumbnail product image"
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    className="h-80 w-120 object-contain border-b border-x-teal-500 rounded-lg"
                />
            </div>
        <div>{/* Image Container */}</div>
        <div>
            <h3 className="font-bold my-5">{title}</h3>
            <Link 
                href={`/${slug}`}
                className="shadow-2xl border-2 text-black border-orange-200 px-2 py-2 rounded-md bg-orange-700"
            >
                Details
            </Link>
        </div>
    </div>
    )
}