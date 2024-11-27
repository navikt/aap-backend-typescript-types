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
    "/api/journalforbrev": {
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
                    "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.Journalf\u00F8rBrevRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.brev.kontrakt.JournalpostIdResponse"];
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
            brevtype: "INNVILGELSE" | "AVSLAG";
            saksnummer: string;
            /** @enum {string} */
            sprak: "EN" | "NB" | "NN";
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
            overskrift?: string | null;
            tekstbolker: components["schemas"]["no.nav.aap.brev.kontrakt.Tekstbolk"][];
        };
        "no.nav.aap.brev.kontrakt.BrevbestillingResponse": {
            /** Format: uuid */
            behandlingReferanse: string;
            brev?: components["schemas"]["no.nav.aap.brev.kontrakt.Brev"];
            /** @enum {string} */
            brevtype: "INNVILGELSE" | "AVSLAG";
            /**
             * Format: date-time
             * @example 2024-11-27T11:53:20.077995011
             */
            oppdatert: string;
            /**
             * Format: date-time
             * @example 2024-11-27T11:53:20.077995011
             */
            opprettet: string;
            /** Format: uuid */
            referanse: string;
            /** @enum {string} */
            "spr\u00E5k": "EN" | "NB" | "NN";
            /** @enum {string} */
            status: "REGISTRERT" | "UNDER_ARBEID" | "FERDIGSTILT";
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
        "no.nav.aap.brev.kontrakt.Journalf\u00F8rBrevRequest": {
            brev: components["schemas"]["no.nav.aap.brev.kontrakt.PdfBrev"];
            brevkode: string;
            /** Format: uuid */
            eksternReferanseId: string;
            fnr: string;
            navn: string;
            saksnummer: string;
            tittel: string;
        };
        "no.nav.aap.brev.kontrakt.JournalpostIdResponse": {
            journalpostId: string;
        };
        "no.nav.aap.brev.kontrakt.PdfBrev": {
            /**
             * Format: date
             * @example 2024-11-27
             */
            dato: string;
            mottaker: components["schemas"]["no.nav.aap.brev.kontrakt.PdfBrev.Mottaker"];
            overskrift?: string | null;
            saksnummer: string;
            tekstbolker: components["schemas"]["no.nav.aap.brev.kontrakt.PdfBrev.Tekstbolk"][];
        };
        "no.nav.aap.brev.kontrakt.PdfBrev.Blokk": {
            innhold: components["schemas"]["no.nav.aap.brev.kontrakt.PdfBrev.FormattertTekst"][];
            /** @enum {string} */
            type: "AVSNITT" | "LISTE";
        };
        "no.nav.aap.brev.kontrakt.PdfBrev.FormattertTekst": {
            formattering: ("UNDERSTREK" | "KURSIV" | "FET")[];
            tekst: string;
        };
        "no.nav.aap.brev.kontrakt.PdfBrev.Innhold": {
            blokker: components["schemas"]["no.nav.aap.brev.kontrakt.PdfBrev.Blokk"][];
            overskrift?: string | null;
        };
        "no.nav.aap.brev.kontrakt.PdfBrev.Mottaker": {
            ident: string;
            navn: string;
        };
        "no.nav.aap.brev.kontrakt.PdfBrev.Tekstbolk": {
            innhold: components["schemas"]["no.nav.aap.brev.kontrakt.PdfBrev.Innhold"][];
            overskrift?: string | null;
        };
        "no.nav.aap.brev.kontrakt.Tekstbolk": {
            /** Format: uuid */
            id: string;
            innhold: components["schemas"]["no.nav.aap.brev.kontrakt.Innhold"][];
            overskrift?: string | null;
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
             * @example 2024-11-27T11:53:20.077995011
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
