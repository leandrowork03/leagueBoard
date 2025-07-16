//src/components/container
import type { ReactNode } from "react"

export function Container({children}:{children: ReactNode}){
    return(
        <div className="pt-30 w-full max-w-7xl mx-auto px-4 pb-5 bg-zinc-950 text-amber-50 min-h-screen">
            {children}
        </div>
    )
}