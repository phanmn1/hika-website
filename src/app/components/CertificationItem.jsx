
const CertificaionItem = 
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-x-5 gap-y-12">
                <div className="p-6">
                    <figure className="min-h-[230px]">
                        <Image 
                            src={ENS_ESI}
                            alt="ENS ESI Image"
                            width={216}
                            height={217}
                            style={ensStyle}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Early Neurological Stimulation (ENS) and Early Scent Introduction (ESI) are daily exercises to which puppies are exposed to from days 3-16 to get them a headstart in development, resilience, and coping mechanisms. Benefits include: boosted brain development, improved cardiovascular performance, and stronger immune system (greater resistance to disease) to list a few.</p>
                    </div>
                    <div className="mx-auto flex justify-center mt-5">
                        <a href="https://www.akc.org/expert-advice/dog-breeding/breeder-puppy-socialization-early-neurological-stimulation/" target="_blank">
                            <button className="rounded-full bg-header text-sand p-3 m-3 hover:bg-sand hover:text-header">More Info</button>  
                        </a>
                    </div>
                </div>