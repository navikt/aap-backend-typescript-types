"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var aap_oppgave_typescript_types_exports = {};
__export(aap_oppgave_typescript_types_exports, {
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus: () => NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus,
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType: () => NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType,
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus: () => NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus,
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType: () => NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType,
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg: () => NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg,
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType: () => NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType,
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent: () => NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent,
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus: () => NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus,
  NoNavAapMotorApiJobbInfoDtoStatus: () => NoNavAapMotorApiJobbInfoDtoStatus,
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper: () => NoNavAapOppgaveFilterFilterDtoBehandlingstyper,
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper: () => NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper,
  NoNavAapOppgaveOppgaveDtoBehandlingstype: () => NoNavAapOppgaveOppgaveDtoBehandlingstype,
  NoNavAapOppgaveOppgaveDtoStatus: () => NoNavAapOppgaveOppgaveDtoStatus,
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype: () => NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype,
  NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus: () => NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus,
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType: () => NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType,
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg: () => NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg,
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType: () => NoNavAapPostmottakKontraktHendelseDefinisjonDTOType,
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType: () => NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType,
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus: () => NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus,
  NoNavAapPostmottakKontraktHendelseEndringDTOStatus: () => NoNavAapPostmottakKontraktHendelseEndringDTOStatus
});
module.exports = __toCommonJS(aap_oppgave_typescript_types_exports);

// schema.ts
var NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2) => {
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2["OPPRETTET"] = "OPPRETTET";
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2["AVSLUTTET"] = "AVSLUTTET";
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2["TOTRINNS_VURDERT"] = "TOTRINNS_VURDERT";
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2["SENDT_TILBAKE_FRA_BESLUTTER"] = "SENDT_TILBAKE_FRA_BESLUTTER";
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2["KVALITETSSIKRET"] = "KVALITETSSIKRET";
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2["SENDT_TILBAKE_FRA_KVALITETSSIKRER"] = "SENDT_TILBAKE_FRA_KVALITETSSIKRER";
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2["AVBRUTT"] = "AVBRUTT";
  return NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus2;
})(NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus || {});
var NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType2) => {
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType2["F_rstegangsbehandling"] = "F\xF8rstegangsbehandling";
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType2["Revurdering"] = "Revurdering";
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType2["Tilbakekreving"] = "Tilbakekreving";
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType2["Klage"] = "Klage";
  return NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType2;
})(NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType || {});
var NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus2) => {
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus2["OPPRETTET"] = "OPPRETTET";
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus2["UTREDES"] = "UTREDES";
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus2["IVERKSETTES"] = "IVERKSETTES";
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus2["AVSLUTTET"] = "AVSLUTTET";
  return NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus2;
})(NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus || {});
var NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType2) => {
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType2["MANUELT_P_KREVD"] = "MANUELT_P\xC5KREVD";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType2["MANUELT_FRIVILLIG"] = "MANUELT_FRIVILLIG";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType2["BREV"] = "BREV";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType2["BREV_VENTEPUNKT"] = "BREV_VENTEPUNKT";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType2["VENTEPUNKT"] = "VENTEPUNKT";
  return NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType2;
})(NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType || {});
var NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2) => {
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["START_BEHANDLING"] = "START_BEHANDLING";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["VURDER_ALDER"] = "VURDER_ALDER";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["VURDER_LOVVALG"] = "VURDER_LOVVALG";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["VURDER_MEDLEMSKAP"] = "VURDER_MEDLEMSKAP";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["AVKLAR_STUDENT"] = "AVKLAR_STUDENT";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["VURDER_BISTANDSBEHOV"] = "VURDER_BISTANDSBEHOV";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["VURDER_SYKEPENGEERSTATNING"] = "VURDER_SYKEPENGEERSTATNING";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FASTSETT_SYKDOMSVILK_RET"] = "FASTSETT_SYKDOMSVILK\xC5RET";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["VURDER_YRKESSKADE"] = "VURDER_YRKESSKADE";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FRITAK_MELDEPLIKT"] = "FRITAK_MELDEPLIKT";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["KVALITETSSIKRING"] = "KVALITETSSIKRING";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["BARNETILLEGG"] = "BARNETILLEGG";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["AVKLAR_SYKDOM"] = "AVKLAR_SYKDOM";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FASTSETT_ARBEIDSEVNE"] = "FASTSETT_ARBEIDSEVNE";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FASTSETT_BEREGNINGSTIDSPUNKT"] = "FASTSETT_BEREGNINGSTIDSPUNKT";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FASTSETT_GRUNNLAG"] = "FASTSETT_GRUNNLAG";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["VIS_GRUNNLAG"] = "VIS_GRUNNLAG";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FASTSETT_UTTAK"] = "FASTSETT_UTTAK";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["SAMORDNING_GRADERING"] = "SAMORDNING_GRADERING";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["EFFEKTUER_11_7"] = "EFFEKTUER_11_7";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["DU_ER_ET_ANNET_STED"] = "DU_ER_ET_ANNET_STED";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["BEREGN_TILKJENT_YTELSE"] = "BEREGN_TILKJENT_YTELSE";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["SIMULERING"] = "SIMULERING";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FORESL__VEDTAK"] = "FORESL\xC5_VEDTAK";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["FATTE_VEDTAK"] = "FATTE_VEDTAK";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["BREV"] = "BREV";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["IVERKSETT_VEDTAK"] = "IVERKSETT_VEDTAK";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2["UDEFINERT"] = "UDEFINERT";
  return NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg2;
})(NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg || {});
var NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2) => {
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value9001"] = "9001";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value9002"] = "9002";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value9003"] = "9003";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5001"] = "5001";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5003"] = "5003";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5004"] = "5004";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5005"] = "5005";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5006"] = "5006";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5007"] = "5007";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5008"] = "5008";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5009"] = "5009";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5010"] = "5010";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5011"] = "5011";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5012"] = "5012";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5013"] = "5013";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5014"] = "5014";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5015"] = "5015";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5097"] = "5097";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5098"] = "5098";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5099"] = "5099";
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2["Value5050"] = "5050";
  return NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType2;
})(NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType || {});
var NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2) => {
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2["OPPRETTET"] = "OPPRETTET";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2["AVSLUTTET"] = "AVSLUTTET";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2["TOTRINNS_VURDERT"] = "TOTRINNS_VURDERT";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2["SENDT_TILBAKE_FRA_BESLUTTER"] = "SENDT_TILBAKE_FRA_BESLUTTER";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2["KVALITETSSIKRET"] = "KVALITETSSIKRET";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2["SENDT_TILBAKE_FRA_KVALITETSSIKRER"] = "SENDT_TILBAKE_FRA_KVALITETSSIKRER";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2["AVBRUTT"] = "AVBRUTT";
  return NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus2;
})(NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus || {});
var NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent = /* @__PURE__ */ ((NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2) => {
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2["VENTER_P__OPPLYSNINGER"] = "VENTER_P\xC5_OPPLYSNINGER";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2["VENTER_P__OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER"] = "VENTER_P\xC5_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2["VENTER_P__MEDISINSKE_OPPLYSNINGER"] = "VENTER_P\xC5_MEDISINSKE_OPPLYSNINGER";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2["VENTER_P__VURDERING_AV_ROL"] = "VENTER_P\xC5_VURDERING_AV_ROL";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2["VENTER_P__SVAR_FRA_BRUKER"] = "VENTER_P\xC5_SVAR_FRA_BRUKER";
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2["VENTER_P__MASKINELL_AVKLARING"] = "VENTER_P\xC5_MASKINELL_AVKLARING";
  return NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent2;
})(NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent || {});
var NoNavAapMotorApiJobbInfoDtoStatus = /* @__PURE__ */ ((NoNavAapMotorApiJobbInfoDtoStatus2) => {
  NoNavAapMotorApiJobbInfoDtoStatus2["KLAR"] = "KLAR";
  NoNavAapMotorApiJobbInfoDtoStatus2["PLUKKET"] = "PLUKKET";
  NoNavAapMotorApiJobbInfoDtoStatus2["FERDIG"] = "FERDIG";
  NoNavAapMotorApiJobbInfoDtoStatus2["FEILET"] = "FEILET";
  NoNavAapMotorApiJobbInfoDtoStatus2["AVBRUTT"] = "AVBRUTT";
  return NoNavAapMotorApiJobbInfoDtoStatus2;
})(NoNavAapMotorApiJobbInfoDtoStatus || {});
var NoNavAapOppgaveOppgaveDtoBehandlingstype = /* @__PURE__ */ ((NoNavAapOppgaveOppgaveDtoBehandlingstype2) => {
  NoNavAapOppgaveOppgaveDtoBehandlingstype2["F_RSTEGANGSBEHANDLING"] = "F\xD8RSTEGANGSBEHANDLING";
  NoNavAapOppgaveOppgaveDtoBehandlingstype2["REVURDERING"] = "REVURDERING";
  NoNavAapOppgaveOppgaveDtoBehandlingstype2["TILBAKEKREVING"] = "TILBAKEKREVING";
  NoNavAapOppgaveOppgaveDtoBehandlingstype2["KLAGE"] = "KLAGE";
  NoNavAapOppgaveOppgaveDtoBehandlingstype2["DOKUMENT_H_NDTERING"] = "DOKUMENT_H\xC5NDTERING";
  NoNavAapOppgaveOppgaveDtoBehandlingstype2["JOURNALF_RING"] = "JOURNALF\xD8RING";
  return NoNavAapOppgaveOppgaveDtoBehandlingstype2;
})(NoNavAapOppgaveOppgaveDtoBehandlingstype || {});
var NoNavAapOppgaveOppgaveDtoStatus = /* @__PURE__ */ ((NoNavAapOppgaveOppgaveDtoStatus2) => {
  NoNavAapOppgaveOppgaveDtoStatus2["OPPRETTET"] = "OPPRETTET";
  NoNavAapOppgaveOppgaveDtoStatus2["AVSLUTTET"] = "AVSLUTTET";
  return NoNavAapOppgaveOppgaveDtoStatus2;
})(NoNavAapOppgaveOppgaveDtoStatus || {});
var NoNavAapOppgaveFilterFilterDtoBehandlingstyper = /* @__PURE__ */ ((NoNavAapOppgaveFilterFilterDtoBehandlingstyper2) => {
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper2["F_RSTEGANGSBEHANDLING"] = "F\xD8RSTEGANGSBEHANDLING";
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper2["REVURDERING"] = "REVURDERING";
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper2["TILBAKEKREVING"] = "TILBAKEKREVING";
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper2["KLAGE"] = "KLAGE";
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper2["DOKUMENT_H_NDTERING"] = "DOKUMENT_H\xC5NDTERING";
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper2["JOURNALF_RING"] = "JOURNALF\xD8RING";
  return NoNavAapOppgaveFilterFilterDtoBehandlingstyper2;
})(NoNavAapOppgaveFilterFilterDtoBehandlingstyper || {});
var NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper = /* @__PURE__ */ ((NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2) => {
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2["F_RSTEGANGSBEHANDLING"] = "F\xD8RSTEGANGSBEHANDLING";
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2["REVURDERING"] = "REVURDERING";
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2["TILBAKEKREVING"] = "TILBAKEKREVING";
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2["KLAGE"] = "KLAGE";
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2["DOKUMENT_H_NDTERING"] = "DOKUMENT_H\xC5NDTERING";
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2["JOURNALF_RING"] = "JOURNALF\xD8RING";
  return NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper2;
})(NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper || {});
var NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype = /* @__PURE__ */ ((NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2) => {
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2["F_RSTEGANGSBEHANDLING"] = "F\xD8RSTEGANGSBEHANDLING";
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2["REVURDERING"] = "REVURDERING";
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2["TILBAKEKREVING"] = "TILBAKEKREVING";
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2["KLAGE"] = "KLAGE";
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2["DOKUMENT_H_NDTERING"] = "DOKUMENT_H\xC5NDTERING";
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2["JOURNALF_RING"] = "JOURNALF\xD8RING";
  return NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype2;
})(NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype || {});
var NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus = /* @__PURE__ */ ((NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus2) => {
  NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus2["OPPRETTET"] = "OPPRETTET";
  NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus2["AVSLUTTET"] = "AVSLUTTET";
  NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus2["SENDT_TILBAKE_FRA_BESLUTTER"] = "SENDT_TILBAKE_FRA_BESLUTTER";
  NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus2["SENDT_TILBAKE_FRA_KVALITETSSIKRER"] = "SENDT_TILBAKE_FRA_KVALITETSSIKRER";
  NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus2["AVBRUTT"] = "AVBRUTT";
  return NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus2;
})(NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus || {});
var NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType = /* @__PURE__ */ ((NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType2) => {
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType2["MANUELT_P_KREVD"] = "MANUELT_P\xC5KREVD";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType2["MANUELT_FRIVILLIG"] = "MANUELT_FRIVILLIG";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType2["VENTEPUNKT"] = "VENTEPUNKT";
  return NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType2;
})(NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType || {});
var NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg = /* @__PURE__ */ ((NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2) => {
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["KATEGORISER_DOKUMENT"] = "KATEGORISER_DOKUMENT";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["DIGITALISER_DOKUMENT"] = "DIGITALISER_DOKUMENT";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["START_BEHANDLING"] = "START_BEHANDLING";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["AVKLAR_TEMA"] = "AVKLAR_TEMA";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["SETT_FAGSAK"] = "SETT_FAGSAK";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["ENDELIG_JOURNALF_RING"] = "ENDELIG_JOURNALF\xD8RING";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["OVERLEVER_TIL_FAGSYSTEM"] = "OVERLEVER_TIL_FAGSYSTEM";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["UDEFINERT"] = "UDEFINERT";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["AVKLAR_SAK"] = "AVKLAR_SAK";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["ENDRE_TEMA"] = "ENDRE_TEMA";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2["VIDERESEND"] = "VIDERESEND";
  return NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg2;
})(NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg || {});
var NoNavAapPostmottakKontraktHendelseDefinisjonDTOType = /* @__PURE__ */ ((NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2) => {
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2["Value9001"] = "9001";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2["Value1337"] = "1337";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2["Value1338"] = "1338";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2["Value1339"] = "1339";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2["Value1340"] = "1340";
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2["Value1341"] = "1341";
  return NoNavAapPostmottakKontraktHendelseDefinisjonDTOType2;
})(NoNavAapPostmottakKontraktHendelseDefinisjonDTOType || {});
var NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType = /* @__PURE__ */ ((NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType2) => {
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType2["DokumentH_ndtering"] = "DokumentH\xE5ndtering";
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType2["Journalf_ring"] = "Journalf\xF8ring";
  return NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType2;
})(NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType || {});
var NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus = /* @__PURE__ */ ((NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus2) => {
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus2["OPPRETTET"] = "OPPRETTET";
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus2["UTREDES"] = "UTREDES";
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus2["IVERKSETTES"] = "IVERKSETTES";
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus2["AVSLUTTET"] = "AVSLUTTET";
  return NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus2;
})(NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus || {});
var NoNavAapPostmottakKontraktHendelseEndringDTOStatus = /* @__PURE__ */ ((NoNavAapPostmottakKontraktHendelseEndringDTOStatus2) => {
  NoNavAapPostmottakKontraktHendelseEndringDTOStatus2["OPPRETTET"] = "OPPRETTET";
  NoNavAapPostmottakKontraktHendelseEndringDTOStatus2["AVSLUTTET"] = "AVSLUTTET";
  NoNavAapPostmottakKontraktHendelseEndringDTOStatus2["SENDT_TILBAKE_FRA_BESLUTTER"] = "SENDT_TILBAKE_FRA_BESLUTTER";
  NoNavAapPostmottakKontraktHendelseEndringDTOStatus2["SENDT_TILBAKE_FRA_KVALITETSSIKRER"] = "SENDT_TILBAKE_FRA_KVALITETSSIKRER";
  NoNavAapPostmottakKontraktHendelseEndringDTOStatus2["AVBRUTT"] = "AVBRUTT";
  return NoNavAapPostmottakKontraktHendelseEndringDTOStatus2;
})(NoNavAapPostmottakKontraktHendelseEndringDTOStatus || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NoNavAapBehandlingsflytKontraktHendelseAvklaringsbehovHendelseDtoStatus,
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseBehandlingType,
  NoNavAapBehandlingsflytKontraktHendelseBehandlingFlytStoppetHendelseStatus,
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOBehovType,
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOLSesISteg,
  NoNavAapBehandlingsflytKontraktHendelseDefinisjonDTOType,
  NoNavAapBehandlingsflytKontraktHendelseEndringDTORsakTilSattPVent,
  NoNavAapBehandlingsflytKontraktHendelseEndringDTOStatus,
  NoNavAapMotorApiJobbInfoDtoStatus,
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper,
  NoNavAapOppgaveFilterTransientFilterDtoBehandlingstyper,
  NoNavAapOppgaveOppgaveDtoBehandlingstype,
  NoNavAapOppgaveOppgaveDtoStatus,
  NoNavAapOppgaveProduksjonsstyringAntallOppgaverDtoBehandlingstype,
  NoNavAapPostmottakKontraktHendelseAvklaringsbehovHendelseDtoStatus,
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOBehovType,
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOLSesISteg,
  NoNavAapPostmottakKontraktHendelseDefinisjonDTOType,
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseBehandlingType,
  NoNavAapPostmottakKontraktHendelseDokumentflytStoppetHendelseStatus,
  NoNavAapPostmottakKontraktHendelseEndringDTOStatus
});
//# sourceMappingURL=index.js.map