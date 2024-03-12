export const load = ({ params }) => {
    return {
        tab: params.tab ?? 'links'
    }
}

export const prerender = false;
