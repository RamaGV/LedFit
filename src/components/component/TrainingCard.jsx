import { Button } from "@/components/ui/button";
import { PlayIcon } from "./Icons"; 

export function TrainingCard({ title, description, imgSrc, altText }) {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
                alt={altText}
                className="w-full h-24 object-cover"
                height="150"
                src={imgSrc}
                style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                }}
                width="150"
            />
            <div className="p-4 space-y-1">
                <h3 className="text-base font-medium">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
                <div className="flex justify-end">
                    <Button className="rounded-full" size="sm" variant="ghost">
                        <PlayIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
