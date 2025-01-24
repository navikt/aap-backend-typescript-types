/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/bestill": {
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
                    "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.BestillBrevRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.BestillBrevResponse"];
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
    "/api/bestilling/{referanse}": {
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
                        "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.BrevbestillingResponse"];
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
    "/api/bestilling/{referanse}/oppdater": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
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
                    "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.Brev"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ferdigstill": {
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
                    "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.FerdigstillBrevRequest"];
                };
            };
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/dokumentinnhenting/journalfor-behandler-bestilling": {
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
                    "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.Journalf\u00F8rBehandlerBestillingRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.Journalf\u00F8rBehandlerBestillingResponse"];
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
    "/api/dokumentinnhenting/ekspeder-journalpost-behandler-bestilling": {
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
                    "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.EkspederBehandlerBestillingRequest"];
                };
            };
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "no.nav.aap.brev.kontrakt.BestillBrevRequest": {
            /** Format: uuid */
            behandlingReferanse: string;
            /** @enum {string} */
            brevtype: "INNVILGELSE" | "AVSLAG" | "VARSEL_OM_BESTILLING" | "FORHÅNDSVARSEL_BRUDD_AKTIVITETSPLIKT";
            saksnummer: string;
            /** @enum {string} */
            sprak: "EN" | "NB" | "NN";
            unikReferanse: string;
            vedlegg: components["schemas"]["no.nav.aap.brev.kontrakt.Vedlegg"][];
        };
        "no.nav.aap.brev.kontrakt.BestillBrevResponse": {
            /** Format: uuid */
            referanse: string;
        };
        "no.nav.aap.brev.kontrakt.Blokk": {
            /** Format: uuid */
            id: string;
            innhold: components["schemas"]["no.nav.aap.brev.kontrakt.BlokkInnhold"][];
            /** @enum {string} */
            type: "AVSNITT" | "LISTE";
        };
        "no.nav.aap.brev.kontrakt.BlokkInnhold": components["schemas"]["no.nav.aap.brev.kontrakt.BlokkInnhold.Faktagrunnlag"] | components["schemas"]["no.nav.aap.brev.kontrakt.BlokkInnhold.FormattertTekst"];
        "no.nav.aap.brev.kontrakt.BlokkInnhold.Faktagrunnlag": {
            /** Format: uuid */
            id: string;
            tekniskNavn: string;
            visningsnavn: string;
            /** @enum {string} */
            type: "TEKST" | "FAKTAGRUNNLAG";
        };
        "no.nav.aap.brev.kontrakt.BlokkInnhold.FormattertTekst": {
            formattering: ("UNDERSTREK" | "KURSIV" | "FET")[];
            /** Format: uuid */
            id: string;
            tekst: string;
            /** @enum {string} */
            type: "TEKST" | "FAKTAGRUNNLAG";
        };
        "no.nav.aap.brev.kontrakt.Brev": {
            journalpostTittel?: string | null;
            overskrift?: string | null;
            tekstbolker: components["schemas"]["no.nav.aap.brev.kontrakt.Tekstbolk"][];
        };
        "no.nav.aap.brev.kontrakt.BrevbestillingResponse": {
            /** Format: uuid */
            behandlingReferanse: string;
            brev?: components["schemas"]["no.nav.aap.brev.kontrakt.Brev"];
            /** @enum {string} */
            brevtype: "INNVILGELSE" | "AVSLAG" | "VARSEL_OM_BESTILLING" | "FORHÅNDSVARSEL_BRUDD_AKTIVITETSPLIKT";
            /**
             * Format: date-time
             * @example 2025-01-24T08:29:37.067228722
             */
            oppdatert: string;
            /**
             * Format: date-time
             * @example 2025-01-24T08:29:37.067228722
             */
            opprettet: string;
            /** Format: uuid */
            referanse: string;
            /** @enum {string} */
            "spr\u00E5k": "EN" | "NB" | "NN";
            /** @enum {string} */
            status: "REGISTRERT" | "UNDER_ARBEID" | "FERDIGSTILT";
        };
        "no.nav.aap.brev.kontrakt.EkspederBehandlerBestillingRequest": {
            journalpostId: string;
        };
        "no.nav.aap.brev.kontrakt.FerdigstillBrevRequest": {
            /** Format: uuid */
            referanse: string;
        };
        "no.nav.aap.brev.kontrakt.Innhold": {
            blokker: components["schemas"]["no.nav.aap.brev.kontrakt.Blokk"][];
            erFullstendig: boolean;
            /** Format: uuid */
            id: string;
            kanRedigeres: boolean;
            overskrift?: string | null;
        };
        "no.nav.aap.brev.kontrakt.Journalf\u00F8rBehandlerBestillingRequest": {
            brevAvsnitt: string[];
            brevkode: string;
            brukerFnr: string;
            /**
             * Format: date
             * @example 2025-01-24
             */
            dato: string;
            /** Format: uuid */
            eksternReferanseId: string;
            mottakerHprnr: string;
            mottakerNavn: string;
            saksnummer: string;
            tittel: string;
        };
        "no.nav.aap.brev.kontrakt.Journalf\u00F8rBehandlerBestillingResponse": {
            dokumenter: string[];
            journalpostFerdigstilt: boolean;
            journalpostId: string;
        };
        "no.nav.aap.brev.kontrakt.Tekstbolk": {
            /** Format: uuid */
            id: string;
            innhold: components["schemas"]["no.nav.aap.brev.kontrakt.Innhold"][];
            overskrift?: string | null;
        };
        "no.nav.aap.brev.kontrakt.Vedlegg": {
            dokumentInfoId: string;
            journalpostId: string;
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
             * @example 2025-01-24T08:29:37.067228722
             */
            "planlagtKj\u00F8retidspunkt": string;
            /** @enum {string} */
            status: "KLAR" | "PLUKKET" | "FERDIG" | "FEILET" | "AVBRUTT";
            type: string;
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
