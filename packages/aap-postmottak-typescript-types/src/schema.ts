export interface paths {
  '/stoppetBehandling': {
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
          /** @example {
           *       "saksnummer": "4LFL5CW",
           *       "sakStatus": "LØPENDE",
           *       "behandlingReferanse": "ace11437-91f0-44e8-b5c5-7a62baa0ef98",
           *       "relatertBehandling": null,
           *       "behandlingOpprettetTidspunkt": "2024-11-01T09:27:03.043316",
           *       "mottattTid": "2024-10-31T09:27:03.043322",
           *       "status": "OPPRETTET",
           *       "behandlingType": "Førstegangsbehandling",
           *       "ident": "1403199012345",
           *       "versjon": "b21e88bca4533d3e0ee3a15f51a87cbaa11a7e9c",
           *       "avklaringsbehov": [
           *         {
           *           "definisjon": {
           *             "type": "5001",
           *             "behovType": "MANUELT_PÅKREVD",
           *             "løsesISteg": "AVKLAR_STUDENT"
           *           },
           *           "status": "AVSLUTTET",
           *           "endringer": [
           *             {
           *               "status": "OPPRETTET",
           *               "tidsstempel": "2024-11-01T09:17:03.043173",
           *               "frist": null,
           *               "endretAv": "Kelvin"
           *             },
           *             {
           *               "status": "AVSLUTTET",
           *               "tidsstempel": "2024-11-01T09:22:03.043195",
           *               "frist": null,
           *               "endretAv": "Z994573"
           *             }
           *           ]
           *         },
           *         {
           *           "definisjon": {
           *             "type": "5003",
           *             "behovType": "MANUELT_PÅKREVD",
           *             "løsesISteg": "AVKLAR_SYKDOM"
           *           },
           *           "status": "OPPRETTET",
           *           "endringer": [
           *             {
           *               "status": "OPPRETTET",
           *               "tidsstempel": "2024-11-01T09:24:03.043204",
           *               "frist": null,
           *               "endretAv": "Kelvin"
           *             }
           *           ]
           *         }
           *       ],
           *       "hendelsesTidspunkt": "2024-11-01T09:27:03.043387",
           *       "avsluttetBehandling": null,
           *       "identerForSak": []
           *     } */
          'application/json': components['schemas']['no.nav.aap.statistikk.api_kontrakt.StoppetBehandling'];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': string;
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
  '/behandlingstid/{typeBehandling}': {
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
          /** @description typebehandling */
          typeBehandling: PathsBehandlingstidTypeBehandlingGetParametersPathTypeBehandling;
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO'][];
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
  '/behandlingstid/lukkede-siste-dager/{antallDager}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Henter alle behandlinger som er lukket i de siste n dager, og regner ut snittalderen på disse. */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Antall dager å regne på */
          antallDager: number;
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
            'application/json': number;
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
  '/\u00E5pne-behandlinger': {
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.api.Antall\u00C5pneOgGjennomsnitt'];
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
  '/behandling-per-avklaringsbehov': {
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
            'application/json': components['schemas']['no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov'][];
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
  '/behandlinger/utvikling': {
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
            'application/json': {
              [key: string]: components['schemas']['no.nav.aap.statistikk.produksjonsstyring.AntallBehandlinger'];
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
  '/drift/api/jobb/feilende': {
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
            'application/json': components['schemas']['no.nav.aap.motor.api.JobbInfoDto'][];
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
  '/drift/api/jobb/planlagte-jobber': {
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
            'application/json': components['schemas']['no.nav.aap.motor.api.JobbInfoDto'][];
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
  '/drift/api/jobb/rekjor/{jobbId}': {
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
            'application/json': string;
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
  '/drift/api/jobb/avbryt/{jobbId}': {
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
            'application/json': string;
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
  '/drift/api/jobb/rekjorAlleFeilede': {
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
            'application/json': string;
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
  '/drift/api/jobb/sisteKj\u00F8rte': {
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
            'application/json': components['schemas']['no.nav.aap.motor.api.JobbInfoDto'][];
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
    'no.nav.aap.motor.api.JobbInfoDto': {
      /** Format: int32 */
      'antallFeilendeFors\u00F8k': number;
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
       * @example 2024-11-01T09:27:03.015585
       */
      'planlagtKj\u00F8retidspunkt': string;
      /** @enum {string} */
      status: NoNavAapMotorApiJobbInfoDtoStatus;
      type: string;
    };
    'no.nav.aap.statistikk.api_kontrakt.AvklaringsbehovHendelse': {
      definisjon: components['schemas']['no.nav.aap.statistikk.api_kontrakt.Definisjon'];
      endringer: components['schemas']['no.nav.aap.statistikk.api_kontrakt.Endring'][];
      /** @enum {string} */
      status: NoNavAapStatistikkApi_kontraktAvklaringsbehovHendelseStatus;
    };
    'no.nav.aap.statistikk.api_kontrakt.AvsluttetBehandlingDTO': {
      /** Format: uuid */
      behandlingsReferanse: string;
      beregningsGrunnlag?: components['schemas']['no.nav.aap.statistikk.api_kontrakt.BeregningsgrunnlagDTO'];
      /**
       * Format: date-time
       * @example 2024-11-01T09:27:03.015585
       */
      hendelsesTidspunkt: string;
      saksnummer: string;
      tilkjentYtelse: components['schemas']['no.nav.aap.statistikk.api_kontrakt.TilkjentYtelseDTO'];
      'vilk\u00E5rsResultat': components['schemas']['no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsResultatDTO'];
    };
    'no.nav.aap.statistikk.api_kontrakt.BeregningsgrunnlagDTO': {
      grunnlag11_19dto?: components['schemas']['no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO'];
      'grunnlagUf\u00F8re'?: components['schemas']['no.nav.aap.statistikk.api_kontrakt.GrunnlagUf\u00F8reDTO'];
      grunnlagYrkesskade?: components['schemas']['no.nav.aap.statistikk.api_kontrakt.GrunnlagYrkesskadeDTO'];
    };
    'no.nav.aap.statistikk.api_kontrakt.Definisjon': {
      /** @enum {string} */
      behovType: NoNavAapStatistikkApi_kontraktDefinisjonBehovType;
      /** @enum {string} */
      'l\u00F8sesISteg': NoNavAapStatistikkApi_kontraktDefinisjonLSesISteg;
      type: string;
    };
    'no.nav.aap.statistikk.api_kontrakt.Endring': {
      endretAv: string;
      /**
       * Format: date
       * @example 2024-11-01
       */
      frist?: string | null;
      /** @enum {string} */
      status: NoNavAapStatistikkApi_kontraktEndringStatus;
      /**
       * Format: date-time
       * @example 2024-11-01T09:27:03.015585
       */
      tidsstempel: string;
    };
    'no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO': {
      er6GBegrenset: boolean;
      erGjennomsnitt: boolean;
      /** Format: double */
      grunnlaget: number;
      /** @description Key type: kotlin.String */
      inntekter: {
        [key: string]: number;
      };
    };
    'no.nav.aap.statistikk.api_kontrakt.GrunnlagUf\u00F8reDTO': {
      grunnlag: components['schemas']['no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO'];
      grunnlagYtterligereNedsatt: components['schemas']['no.nav.aap.statistikk.api_kontrakt.Grunnlag11_19DTO'];
      grunnlaget: number;
      /** @enum {string} */
      type: NoNavAapStatistikkApi_kontraktGrunnlagUfReDTOType;
      /** @description Key type: kotlin.String */
      'uf\u00F8reInntekterFraForeg\u00E5ende\u00C5r': {
        [key: string]: number;
      };
      /** Format: int32 */
      'uf\u00F8reYtterligereNedsattArbeidsevne\u00C5r': number;
      /** Format: int32 */
      'uf\u00F8regrad': number;
    };
    'no.nav.aap.statistikk.api_kontrakt.GrunnlagYrkesskadeDTO': {
      andelSomIkkeSkyldesYrkesskade: number;
      andelSomSkyldesYrkesskade: number;
      /** Format: int32 */
      andelYrkesskade: number;
      'antatt\u00C5rligInntektYrkesskadeTidspunktet': number;
      /** Format: int32 */
      benyttetAndelForYrkesskade: number;
      beregningsgrunnlag: components['schemas']['no.nav.aap.statistikk.api_kontrakt.BeregningsgrunnlagDTO'];
      grunnlagEtterYrkesskadeFordel: number;
      grunnlagForBeregningAvYrkesskadeandel: number;
      grunnlaget: number;
      'inkludererUf\u00F8re': boolean;
      /** Format: int32 */
      terskelverdiForYrkesskade: number;
      /** Format: int32 */
      yrkesskadeTidspunkt: number;
      yrkesskadeinntektIG: number;
    };
    'no.nav.aap.statistikk.api_kontrakt.StoppetBehandling': {
      avklaringsbehov: components['schemas']['no.nav.aap.statistikk.api_kontrakt.AvklaringsbehovHendelse'][];
      avsluttetBehandling?: components['schemas']['no.nav.aap.statistikk.api_kontrakt.AvsluttetBehandlingDTO'];
      /**
       * Format: date-time
       * @example 2024-11-01T09:27:03.015585
       */
      behandlingOpprettetTidspunkt: string;
      /** Format: uuid */
      behandlingReferanse: string;
      /** @enum {string} */
      behandlingType: NoNavAapStatistikkApi_kontraktStoppetBehandlingBehandlingType;
      /**
       * Format: date-time
       * @example 2024-11-01T09:27:03.015585
       */
      hendelsesTidspunkt: string;
      ident: string;
      identerForSak: string[];
      /**
       * Format: date-time
       * @example 2024-11-01T09:27:03.015585
       */
      mottattTid: string;
      /** Format: uuid */
      relatertBehandling?: string | null;
      /** @enum {string} */
      sakStatus: NoNavAapStatistikkApi_kontraktStoppetBehandlingSakStatus;
      saksnummer: string;
      /** @enum {string} */
      status: NoNavAapStatistikkApi_kontraktStoppetBehandlingStatus;
      versjon: string;
    };
    'no.nav.aap.statistikk.api_kontrakt.TilkjentYtelseDTO': {
      perioder: components['schemas']['no.nav.aap.statistikk.api_kontrakt.TilkjentYtelsePeriodeDTO'][];
    };
    'no.nav.aap.statistikk.api_kontrakt.TilkjentYtelsePeriodeDTO': {
      /** Format: double */
      dagsats: number;
      /**
       * Format: date
       * @example 2024-11-01
       */
      fraDato: string;
      /** Format: double */
      gradering: number;
      /**
       * Format: date
       * @example 2024-11-01
       */
      tilDato: string;
    };
    'no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rDTO': {
      perioder: components['schemas']['no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsPeriodeDTO'][];
      /** @enum {string} */
      'vilk\u00E5rType': NoNavAapStatistikkApi_kontraktVilkRDTOVilkRType;
    };
    'no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsPeriodeDTO': {
      'avslags\u00E5rsak'?: string | null;
      /**
       * Format: date
       * @example 2024-11-01
       */
      fraDato: string;
      'innvilgelses\u00E5rsak'?: string | null;
      manuellVurdering: boolean;
      /**
       * Format: date
       * @example 2024-11-01
       */
      tilDato: string;
      /** @enum {string} */
      utfall: NoNavAapStatistikkApi_kontraktVilkRsPeriodeDTOUtfall;
    };
    'no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rsResultatDTO': {
      typeBehandling: string;
      'vilk\u00E5r': components['schemas']['no.nav.aap.statistikk.api_kontrakt.Vilk\u00E5rDTO'][];
    };
    'no.nav.aap.statistikk.produksjonsstyring.AntallBehandlinger': {
      /** Format: int32 */
      avsluttede: number;
      /** Format: int32 */
      nye: number;
      /** Format: int32 */
      totalt: number;
    };
    'no.nav.aap.statistikk.produksjonsstyring.BehandlingPerAvklaringsbehov': {
      /** Format: int32 */
      antall: number;
      behov: string;
    };
    'no.nav.aap.statistikk.produksjonsstyring.api.Antall\u00C5pneOgGjennomsnitt': {
      /** Format: int32 */
      'antall\u00C5pne': number;
      /** Format: double */
      gjennomsnittsalder: number;
    };
    'no.nav.aap.statistikk.produksjonsstyring.api.BehandlingstidPerDagDTO': {
      /**
       * Format: date
       * @example 2024-11-01
       */
      dag: string;
      /** Format: double */
      snitt: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export enum PathsBehandlingstidTypeBehandlingGetParametersPathTypeBehandling {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum NoNavAapMotorApiJobbInfoDtoStatus {
  KLAR = 'KLAR',
  PLUKKET = 'PLUKKET',
  FERDIG = 'FERDIG',
  FEILET = 'FEILET',
  AVBRUTT = 'AVBRUTT',
}
export enum NoNavAapStatistikkApi_kontraktAvklaringsbehovHendelseStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
  TOTRINNS_VURDERT = 'TOTRINNS_VURDERT',
  SENDT_TILBAKE_FRA_BESLUTTER = 'SENDT_TILBAKE_FRA_BESLUTTER',
  KVALITETSSIKRET = 'KVALITETSSIKRET',
  SENDT_TILBAKE_FRA_KVALITETSSIKRER = 'SENDT_TILBAKE_FRA_KVALITETSSIKRER',
  AVBRUTT = 'AVBRUTT',
}
export enum NoNavAapStatistikkApi_kontraktDefinisjonBehovType {
  MANUELT_P_KREVD = 'MANUELT_P\u00C5KREVD',
  MANUELT_FRIVILLIG = 'MANUELT_FRIVILLIG',
  VENTEPUNKT = 'VENTEPUNKT',
}
export enum NoNavAapStatistikkApi_kontraktDefinisjonLSesISteg {
  START_BEHANDLING = 'START_BEHANDLING',
  VURDER_ALDER = 'VURDER_ALDER',
  VURDER_LOVVALG = 'VURDER_LOVVALG',
  VURDER_MEDLEMSKAP = 'VURDER_MEDLEMSKAP',
  AVKLAR_STUDENT = 'AVKLAR_STUDENT',
  VURDER_BISTANDSBEHOV = 'VURDER_BISTANDSBEHOV',
  VURDER_SYKEPENGEERSTATNING = 'VURDER_SYKEPENGEERSTATNING',
  FRITAK_MELDEPLIKT = 'FRITAK_MELDEPLIKT',
  KVALITETSSIKRING = 'KVALITETSSIKRING',
  BARNETILLEGG = 'BARNETILLEGG',
  AVKLAR_SYKDOM = 'AVKLAR_SYKDOM',
  FASTSETT_ARBEIDSEVNE = 'FASTSETT_ARBEIDSEVNE',
  FASTSETT_BEREGNINGSTIDSPUNKT = 'FASTSETT_BEREGNINGSTIDSPUNKT',
  FASTSETT_GRUNNLAG = 'FASTSETT_GRUNNLAG',
  VIS_GRUNNLAG = 'VIS_GRUNNLAG',
  FASTSETT_UTTAK = 'FASTSETT_UTTAK',
  SAMORDNING_GRADERING = 'SAMORDNING_GRADERING',
  DU_ER_ET_ANNET_STED = 'DU_ER_ET_ANNET_STED',
  BEREGN_TILKJENT_YTELSE = 'BEREGN_TILKJENT_YTELSE',
  SIMULERING = 'SIMULERING',
  FORESL__VEDTAK = 'FORESL\u00C5_VEDTAK',
  FATTE_VEDTAK = 'FATTE_VEDTAK',
  BREV = 'BREV',
  IVERKSETT_VEDTAK = 'IVERKSETT_VEDTAK',
}
export enum NoNavAapStatistikkApi_kontraktEndringStatus {
  OPPRETTET = 'OPPRETTET',
  AVSLUTTET = 'AVSLUTTET',
  TOTRINNS_VURDERT = 'TOTRINNS_VURDERT',
  SENDT_TILBAKE_FRA_BESLUTTER = 'SENDT_TILBAKE_FRA_BESLUTTER',
  KVALITETSSIKRET = 'KVALITETSSIKRET',
  SENDT_TILBAKE_FRA_KVALITETSSIKRER = 'SENDT_TILBAKE_FRA_KVALITETSSIKRER',
  AVBRUTT = 'AVBRUTT',
}
export enum NoNavAapStatistikkApi_kontraktGrunnlagUfReDTOType {
  STANDARD = 'STANDARD',
  YTTERLIGERE_NEDSATT = 'YTTERLIGERE_NEDSATT',
}
export enum NoNavAapStatistikkApi_kontraktStoppetBehandlingBehandlingType {
  F_rstegangsbehandling = 'F\u00F8rstegangsbehandling',
  Revurdering = 'Revurdering',
  Tilbakekreving = 'Tilbakekreving',
  Klage = 'Klage',
}
export enum NoNavAapStatistikkApi_kontraktStoppetBehandlingSakStatus {
  OPPRETTET = 'OPPRETTET',
  UTREDES = 'UTREDES',
  L_PENDE = 'L\u00D8PENDE',
  AVSLUTTET = 'AVSLUTTET',
}
export enum NoNavAapStatistikkApi_kontraktStoppetBehandlingStatus {
  OPPRETTET = 'OPPRETTET',
  UTREDES = 'UTREDES',
  IVERKSETTES = 'IVERKSETTES',
  AVSLUTTET = 'AVSLUTTET',
}
export enum NoNavAapStatistikkApi_kontraktVilkRDTOVilkRType {
  ALDERSVILK_RET = 'ALDERSVILK\u00C5RET',
  SYKDOMSVILK_RET = 'SYKDOMSVILK\u00C5RET',
  BISTANDSVILK_RET = 'BISTANDSVILK\u00C5RET',
  MEDLEMSKAP = 'MEDLEMSKAP',
  GRUNNLAGET = 'GRUNNLAGET',
  SYKEPENGEERSTATNING = 'SYKEPENGEERSTATNING',
}
export enum NoNavAapStatistikkApi_kontraktVilkRsPeriodeDTOUtfall {
  IKKE_VURDERT = 'IKKE_VURDERT',
  IKKE_RELEVANT = 'IKKE_RELEVANT',
  OPPFYLT = 'OPPFYLT',
  IKKE_OPPFYLT = 'IKKE_OPPFYLT',
}
export type operations = Record<string, never>;
