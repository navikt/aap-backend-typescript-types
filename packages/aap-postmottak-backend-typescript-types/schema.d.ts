/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/config/definisjoner": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            [key: string]: components["schemas"]["no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon"];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.DetaljertBehandlingDTO"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/forbered": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.DetaljertBehandlingDTO"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.JournalpostDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.journalpostogbehandling.behandling.BehandlingsreferansePathParam"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/flyt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.BehandlingFlytOgTilstandDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/resultat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.BehandlingResultatDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/sett-p\u00E5-vent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.SettP\u00E5VentRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.BehandlingResultatDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/vente-informasjon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.flyt.Venteinformasjon"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/l\u00F8s-behov": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling"];
                };
            };
            responses: {
                202: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/dokumenter/{journalpostId}/{dokumentinfoId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Journalpost-ID */
                    journalpostId: number;
                    /** @description Dokumentinfo-ID */
                    dokumentinfoId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/pdf": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/dokumenter/{referanse}/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentInfoResponsDTO"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/avklarTemaVurdering": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.tema.AvklarTemaGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/endre-tema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.tema.EndreTemaResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/finnSak": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.sak.AvklarSakGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/strukturering": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.strukturering.StruktureringGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/behandling/{referanse}/grunnlag/overlevering": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description referanse */
                    referanse: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.overlevering.OverleveringGrunnlagDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/feilende": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/planlagte-jobber": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/rekjor/{jobbId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description ID */
                    jobbId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/avbryt/{jobbId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description ID */
                    jobbId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/rekjorAlleFeilede": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drift/api/jobb/sisteKj\u00F8rte": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test/hentAlleBehandlinger": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.postmottak.test.BehandlingsListe"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test/finnEnhetForPerson/{ident}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description ident */
                    ident: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "no.nav.aap.komponenter.type.Periode": {
            /**
             * Format: date
             * @example 2025-01-28
             */
            fom: string;
            /**
             * Format: date
             * @example 2025-01-28
             */
            tom: string;
        };
        "no.nav.aap.motor.api.JobbInfoDto": {
            /** Format: int32 */
            "antallFeilendeFors\u00F8k": number;
            beskrivelse: string;
            feilmelding?: string | null;
            /** Format: int64 */
            id: number;
            /** @description Key type: kotlin.String */
            metadata: {
                [key: string]: string;
            };
            navn: string;
            /**
             * Format: date-time
             * @example 2025-01-28T11:55:10.58242529
             */
            "planlagtKj\u00F8retidspunkt": string;
            /** @enum {string} */
            status: "KLAR" | "PLUKKET" | "FERDIG" | "FEILET" | "AVBRUTT";
            type: string;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentDto": {
            dokumentInfoId: string;
            tittel?: string | null;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentIdent": {
            ident?: string | null;
            navn?: string | null;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentInfoResponsDTO": {
            avsender?: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentIdent"];
            dokumenter: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentDto"][];
            /** Format: int64 */
            journalpostId: number;
            "s\u00F8ker"?: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.dokument.DokumentIdent"];
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.overlevering.OverleveringGrunnlagDto": {
            vurdering?: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.overlevering.OverleveringVurderingDto"];
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.overlevering.OverleveringVurderingDto": {
            skalOverleveres: boolean;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.sak.AvklarSakGrunnlagDto": {
            saksinfo: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.sak.SaksInfoDto"][];
            vurdering?: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.sak.AvklarSakVurderingDto"];
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.sak.AvklarSakVurderingDto": {
            "f\u00F8rP\u00E5GenerellSak": boolean;
            saksnummer?: string | null;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.sak.SaksInfoDto": {
            periode: components["schemas"]["no.nav.aap.komponenter.type.Periode"];
            saksnummer: string;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.strukturering.StruktureringGrunnlagDto": {
            vurdering?: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.strukturering.StruktureringVurderingDto"];
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.strukturering.StruktureringVurderingDto": {
            /** @enum {string} */
            kategori: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "LEGEERKLÆRING" | "LEGEERKLÆRING_AVVIST" | "DIALOGMELDING";
            strukturertDokumentJson?: string | null;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.tema.AvklarTemaGrunnlagDto": {
            dokumenter: string[];
            vurdering?: components["schemas"]["no.nav.aap.postmottak.api.faktagrunnlag.tema.AvklarTemaVurderingDto"];
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.tema.AvklarTemaVurderingDto": {
            skalTilAap: boolean;
        };
        "no.nav.aap.postmottak.api.faktagrunnlag.tema.EndreTemaResponse": {
            redirectUrl: string;
        };
        "no.nav.aap.postmottak.api.flyt.AvklaringsbehovDTO": {
            definisjon: components["schemas"]["no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon"];
            endringer: components["schemas"]["no.nav.aap.postmottak.api.flyt.EndringDTO"][];
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "SENDT_TILBAKE_FRA_BESLUTTER" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
        };
        "no.nav.aap.postmottak.api.flyt.BehandlingFlytOgTilstandDto": {
            /** @enum {string} */
            aktivGruppe: "KATEGORISER" | "DIGITALISER" | "AVKLAR_TEMA" | "START_BEHANDLING" | "UDEFINERT" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "AVKLAR_SAK" | "VIDERESEND" | "IVERKSETTES";
            /** @enum {string} */
            aktivtSteg: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "VIDERESEND" | "IVERKSETTES";
            /** Format: int64 */
            behandlingVersjon: number;
            flyt: components["schemas"]["no.nav.aap.postmottak.api.flyt.FlytGruppe"][];
            prosessering: components["schemas"]["no.nav.aap.postmottak.api.flyt.Prosessering"];
            visning: components["schemas"]["no.nav.aap.postmottak.flyt.flate.visning.Visning"];
        };
        "no.nav.aap.postmottak.api.flyt.BehandlingResultatDto": Record<string, never>;
        "no.nav.aap.postmottak.api.flyt.DetaljertBehandlingDTO": {
            /** @enum {string} */
            aktivtSteg: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "VIDERESEND" | "IVERKSETTES";
            avklaringsbehov: components["schemas"]["no.nav.aap.postmottak.api.flyt.AvklaringsbehovDTO"][];
            /**
             * Format: date-time
             * @example 2025-01-28T11:55:10.58242529
             */
            opprettet: string;
            referanse: components["schemas"]["no.nav.aap.postmottak.journalpostogbehandling.behandling.BehandlingsreferansePathParam"];
            skalForberede: boolean;
            /** @enum {string} */
            status: "OPPRETTET" | "UTREDES" | "IVERKSETTES" | "AVSLUTTET";
            type: string;
            /** Format: int64 */
            versjon: number;
        };
        "no.nav.aap.postmottak.api.flyt.EndringDTO": {
            begrunnelse?: string | null;
            endretAv: string;
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "SENDT_TILBAKE_FRA_BESLUTTER" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
            /**
             * Format: date-time
             * @example 2025-01-28T11:55:10.58242529
             */
            tidsstempel: string;
        };
        "no.nav.aap.postmottak.api.flyt.FlytGruppe": {
            "erFullf\u00F8rt": boolean;
            skalVises: boolean;
            steg: components["schemas"]["no.nav.aap.postmottak.api.flyt.FlytSteg"][];
            /** @enum {string} */
            stegGruppe: "KATEGORISER" | "DIGITALISER" | "AVKLAR_TEMA" | "START_BEHANDLING" | "UDEFINERT" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "AVKLAR_SAK" | "VIDERESEND" | "IVERKSETTES";
        };
        "no.nav.aap.postmottak.api.flyt.FlytSteg": {
            avklaringsbehov: components["schemas"]["no.nav.aap.postmottak.api.flyt.AvklaringsbehovDTO"][];
            /** @enum {string} */
            stegType: "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "VIDERESEND" | "IVERKSETTES";
        };
        "no.nav.aap.postmottak.api.flyt.JournalpostDto": {
            /** Format: int64 */
            referanse: number;
        };
        "no.nav.aap.postmottak.api.flyt.Prosessering": {
            /** @enum {string} */
            status: "JOBBER" | "FEILET" | "FERDIG";
            ventendeOppgaver: components["schemas"]["no.nav.aap.motor.api.JobbInfoDto"][];
        };
        "no.nav.aap.postmottak.api.flyt.SettP\u00E5VentRequest": {
            begrunnelse: string;
            /** Format: int64 */
            behandlingVersjon: number;
            /**
             * Format: date
             * @example 2025-01-28
             */
            frist?: string | null;
            /** @enum {string} */
            grunn: "VENTER_PÅ_OPPLYSNINGER" | "VENTER_PÅ_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER" | "VENTER_PÅ_MEDISINSKE_OPPLYSNINGER" | "VENTER_PÅ_VURDERING_AV_ROL" | "VENTER_PÅ_SVAR_FRA_BRUKER";
        };
        "no.nav.aap.postmottak.api.flyt.Venteinformasjon": {
            begrunnelse: string;
            /**
             * Format: date
             * @example 2025-01-28
             */
            frist: string;
            /** @enum {string} */
            grunn: "VENTER_PÅ_OPPLYSNINGER" | "VENTER_PÅ_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER" | "VENTER_PÅ_MEDISINSKE_OPPLYSNINGER" | "VENTER_PÅ_VURDERING_AV_ROL" | "VENTER_PÅ_SVAR_FRA_BRUKER";
        };
        "no.nav.aap.postmottak.avklaringsbehov.flate.L\u00F8sAvklaringsbehovP\u00E5Behandling": {
            /** Format: int64 */
            behandlingVersjon: number;
            behov: components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklaringsbehovL\u00F8sning"];
            ingenEndringIGruppe?: boolean | null;
            referanse: components["schemas"]["no.nav.aap.postmottak.journalpostogbehandling.behandling.Behandlingsreferanse"];
        };
        "no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklarOverleveringL\u00F8sning": {
            behovstype: string;
            skalOverleveres: boolean;
        };
        "no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklarSaksnummerL\u00F8sning": {
            behovstype: string;
            "f\u00F8rP\u00E5GenerellSak": boolean;
            opprettNySak: boolean;
            saksnummer?: string | null;
        };
        "no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklarTemaL\u00F8sning": {
            behovstype: string;
            skalTilAap: boolean;
        };
        "no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklaringsbehovL\u00F8sning": components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklarOverleveringL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklarSaksnummerL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.AvklarTemaL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.DigitaliserDokumentL\u00F8sning"] | components["schemas"]["no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.SattP\u00E5VentL\u00F8sning"];
        "no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.DigitaliserDokumentL\u00F8sning": {
            behovstype: string;
            /** @enum {string} */
            kategori: "SØKNAD" | "AKTIVITETSKORT" | "PLIKTKORT" | "LEGEERKLÆRING" | "LEGEERKLÆRING_AVVIST" | "DIALOGMELDING";
            strukturertDokument?: string | null;
        };
        "no.nav.aap.postmottak.avklaringsbehov.l\u00F8sning.SattP\u00E5VentL\u00F8sning": {
            behovstype: string;
        };
        "no.nav.aap.postmottak.flyt.flate.visning.Visning": {
            readOnly: boolean;
            visVentekort: boolean;
        };
        "no.nav.aap.postmottak.journalpostogbehandling.behandling.Behandlingsreferanse": {
            /** Format: uuid */
            referanse: string;
        };
        "no.nav.aap.postmottak.journalpostogbehandling.behandling.BehandlingsreferansePathParam": {
            /** Format: uuid */
            referanse: string;
        };
        "no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon": {
            /** @enum {string} */
            kode: "9001" | "1337" | "1338" | "1339" | "1340" | "1341";
            kreverToTrinn: boolean;
            "l\u00F8sesAv": ("VEILEDER" | "SAKSBEHANDLER" | "BESLUTTER" | "LES" | "AVDELINGSLEDER" | "UTVIKLER")[];
            /** @enum {string} */
            "l\u00F8sesISteg": "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "VIDERESEND" | "IVERKSETTES";
            /** @enum {string} */
            type: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG" | "VENTEPUNKT";
            name: string;
        };
        "no.nav.aap.postmottak.test.BehandlingsListe": {
            id: string;
            /**
             * Format: date-time
             * @example 2025-01-28T11:55:10.58242529
             */
            opprettet: string;
            status: string;
            steg: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
