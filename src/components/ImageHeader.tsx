import BreadcrumbRow from "./BreadcrumbRow"

type ImageTitleSectionProps = {
    title: string
    imageUrl: string
    height?: string
}

export default function ImageTitleSection({
    title,
    imageUrl,
    height = "h-[260px] md:h-[340px]",
}: ImageTitleSectionProps) {
    return (
        <>
            <section
                className={`relative w-full ${height} flex items-center justify-center`}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="relative font-abhaya top-18 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">
                        {title}
                    </h1>

                    <div className="w-auto rounded-full h-1.5 bg-yellow-400" />
                </div>
            </section>
            <BreadcrumbRow current={title}/>
        </>
    )
}
