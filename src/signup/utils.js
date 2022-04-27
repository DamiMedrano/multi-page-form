import axios from 'axios';

const url = 'https://api-gateway.staging.scala.ly/afip';
const apikey = `Apikey ChTec.mnJeDQsJijJVdLZ409HHgcOnY1OnhZr4DgCvhzWebKqGnQX55M`;
const getFromDNI = '/ws_sr_padron_a13/getIdPersonaListByDocumento?documento=';
const getFromCUIL = '/ws_sr_padron_a13/getPersona?idPersona=';

export function getDataFromDNI(dni) {
  axios
    .get(url + getFromDNI + dni, {
      headers: {
        Authorization: apikey,
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((res) => {
      const cuil = JSON.stringify(res.data.idPersona[1]);
      getDataFromCUIL(cuil);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getDataFromCUIL(cuil) {
  let test = '';
  axios
    .get(url + getFromCUIL + cuil, {
      headers: {
        Authorization: apikey,
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((cuilResponse) => {
      test = JSON.stringify(cuilResponse);
    })

    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      console.log('on finally:' + test);
      return test;
    });
}
