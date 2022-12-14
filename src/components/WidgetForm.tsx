import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: " Ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: "Outros",
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        },
    }
    
}

export function WidgetForm() {

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6 flex- flex flex-col items-center">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500"
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                }) }
            </div>

            <footer className="text-xs text-neutral-400 flex-1 flex flex-col items-center">
                Feito por FernandoLelis
            </footer>
        </div>
    );
}