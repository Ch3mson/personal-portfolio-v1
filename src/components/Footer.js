import { FOOTER } from "@/constants"

export function Footer() {
    return (
        <div className="border-b border-neutral-900 p-12">
            <div className="text-center tracking-tighter">
                <p className="my-4">{FOOTER.description}</p>
            </div>
        </div>
    )
}