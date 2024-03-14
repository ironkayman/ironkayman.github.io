import { goto } from '$app/navigation';

export const load = ({ params }) => {
    // if (!params.tab) goto("/links");

    return {
        tab: params.tab ?? "links"
    }
}

export const prerender = true;
