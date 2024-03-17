import { goto } from '$app/navigation';

export const load = ({ params }) => {
    // if (!params.tab) goto("/links");

    return {
        tab: params.tab ?? "links"
    }
}

  /** @type {import('./$types').EntryGenerator} */
  export function entries() {
    return [
        { tab: 'links' },
        { tab: 'about' },
        { tab: 'projects' },
        { tab: 'gateway' },
    ];
}

export const prerender = true;
export const trailingSlash = 'never';