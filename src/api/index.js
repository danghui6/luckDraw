import { get, post } from '../utils/server'

export function getUser (params) {
  return get(`/manager/api/v1.0/tbl_chmkt_recmd_inf_sync/list?start_date=${params.startDate}&end_date=${params.endDate}`)
}