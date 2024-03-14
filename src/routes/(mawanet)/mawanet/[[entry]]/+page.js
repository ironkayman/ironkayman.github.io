
    import { fetchComponent } from "$lib/stores/mawanet.loader.js"

    export async function load({ params }) {
    let entryProperties = await fetchComponent(params.entry ?? 'index')
        return {
        pageName: entryProperties.componentName,
        pageComponent: entryProperties.entryComponent,
        error: entryProperties.error,
    };
    }


    /** @type {import('./$types').EntryGenerator} */
    export function entries() {
        return [

    { entry: 'maelstrom_encyclopedia' },
    { entry: 'engine_of_narraphysic_gliding' },
    { entry: 'resonance' },
    { entry: 'vacuum_ascention' },
    { entry: 'accursed_framework' },
    { entry: 'conceptual_configuration' },
    { entry: 'altered_field_presence' },
    { entry: 'narraphysic_isolation_environment' },
    { entry: 'narraphysic_realm' },
    { entry: 'narrative' },
    { entry: 'retroactive_refractory_feedback_loop' },
    { entry: 'paraexhumed' },
    { entry: 'revenant' },
    { entry: 'unbound' },
    { entry: 'superimposition_event' },
        ];
    }

    export const prerender = true;
