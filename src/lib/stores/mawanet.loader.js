
    import { derived, writable } from "svelte/store";

    import Error404 from "$lib/components/error.404.svelte"
    import Error403 from "$lib/components/error.403.svelte"

    export const nextPageName = writable();
    export const currentPageName = writable();
    export const doesPageDiffer = derived(
    [currentPageName, nextPageName],
    ($values, set) => {
        set($values[0] !== $values[1])
    }
    )

    /**
    * Dynamically import an existing mdx componet (bundled)
    * 
    * @param {String} componentName 
    */
    export async function fetchComponent (componentName) {
        let EntryComponent = null;
        let error = undefined;
        try {
        switch (componentName) {
            case 'index':
            EntryComponent = (await import('$lib/mawanet/maelstrom_encyclopedia.mdx')).default;
            break;

    case 'maelstrom_encyclopedia':
        EntryComponent = (await import('$lib/mawanet/maelstrom_encyclopedia.mdx')).default;
        break;

    case 'engine_of_narraphysic_gliding':
        EntryComponent = (await import('$lib/mawanet/engine_of_narraphysic_gliding.mdx')).default;
        break;

    case 'resonance':
        EntryComponent = (await import('$lib/mawanet/resonance.mdx')).default;
        break;

    case 'vacuum_ascention':
        EntryComponent = (await import('$lib/mawanet/vacuum_ascention.mdx')).default;
        break;

    case 'salt_sarcophaguses':
        EntryComponent = (await import('$lib/mawanet/salt_sarcophaguses.mdx')).default;
        break;

    case 'accursed_framework':
        EntryComponent = (await import('$lib/mawanet/accursed_framework.mdx')).default;
        break;

    case 'conceptual_configuration':
        EntryComponent = (await import('$lib/mawanet/conceptual_configuration.mdx')).default;
        break;

    case 'death_drive':
        EntryComponent = (await import('$lib/mawanet/death_drive.mdx')).default;
        break;

    case 'altered_field_presence':
        EntryComponent = (await import('$lib/mawanet/altered_field_presence.mdx')).default;
        break;

    case 'narraphysic_isolation_environment':
        EntryComponent = (await import('$lib/mawanet/narraphysic_isolation_environment.mdx')).default;
        break;

    case 'narraphysic_realm':
        EntryComponent = (await import('$lib/mawanet/narraphysic_realm.mdx')).default;
        break;

    case 'narrative':
        EntryComponent = (await import('$lib/mawanet/narrative.mdx')).default;
        break;

    case 'retroactive_refractory_feedback_loop':
        EntryComponent = (await import('$lib/mawanet/retroactive_refractory_feedback_loop.mdx')).default;
        break;

    case 'paraexhumed':
        EntryComponent = (await import('$lib/mawanet/paraexhumed.mdx')).default;
        break;

    case 'revenant':
        EntryComponent = (await import('$lib/mawanet/revenant.mdx')).default;
        break;

    case 'unbound':
        EntryComponent = (await import('$lib/mawanet/unbound.mdx')).default;
        break;

    case 'superimposition_event':
        EntryComponent = (await import('$lib/mawanet/superimposition_event.mdx')).default;
        break;

    case 'gap_ammunition':
        EntryComponent = (await import('$lib/mawanet/gap_ammunition.mdx')).default;
        break;

            default:
            EntryComponent = Error403;
            break;
        }
        } catch (e) {
        console.error(e);
        EntryComponent = Error404;
        error = e;
        }
        nextPageName.set(componentName.replace(/\_/g," ").split(' ')[0].toUpperCase());
        return {
            componentName,
            entryComponent: EntryComponent,
            error,
        }
    }
