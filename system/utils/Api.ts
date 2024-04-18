import { API_LAYER, LOCAL_STORAGE_AUTH_TOKEN } from 'consts'
import logger from 'logger'
import {
    UnprocessableContentError,
    UnauthorizedError,
    NotFoundError,
} from 'errors'
import { FindInput } from 'store/store.types'
import { TrackFormValues, TracksSortings } from 'store/tracks.types'
import {
    TracksCollectionFormValues,
    TracksCollectionsSortings,
} from 'store/tracksCollections.types'
import { AuthorizationLoginFormValues } from 'store/authorization.types'


const isProduction = process.env.NODE_ENV === 'production'
const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT
const protocol = isProduction ? 'https' : 'http'
const url = `${protocol}://${host}:${port}/api`

class Api {
    static token: null | string =
        localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN) || null

    static setToken(value: string) {
        this.token = value
    }

    static async createTrack(data: TrackFormValues) {
        return this._create('/tracks', data)
    }

    static async createTracksCollection(data: TracksCollectionFormValues) {
        return this._create('/tracks-collections', data)
    }

    static async deleteTrack(id: string) {
        return this._delete(`/tracks/${id}`)
    }

    static async deleteTracksCollection(id: string) {
        return this._delete(`/tracks-collections/${id}`)
    }

    static async findTracks(params: FindInput<TracksSortings>) {
        return this._find('/tracks', params)
    }

    static async findTracksCollections(
        params: FindInput<TracksCollectionsSortings>,
    ) {
        return this._find('/tracks-collections', params)
    }

    static async getTrack(id: string) {
        return this._get(`/tracks/${id}`)
    }

    static async getTracksCollection(id: string) {
        return this._get(`/tracks-collections/${id}`)
    }

    static async login(data: AuthorizationLoginFormValues) {
        return this._create('/authentication', data)
    }

    static async updateTrack(id: string, data: TrackFormValues) {
        return this._update(`/tracks/${id}`, data)
    }

    static async updateTracksCollection(
        id: string,
        data: TracksCollectionFormValues,
    ) {
        return this._update(`/tracks-collections/${id}`, data)
    }

    static async _create(path: string, data: object) {
        const options = {
            method: 'POST',
            headers: {
                Authorization: this.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        try {
            const response = await fetch(`${url}${path}`, options)

            if (this._isResponseError(response)) {
                throw response
            }

            const result = await response.json()

            return result
        } catch (error) {
            if (this._isResponseError(error)) {
                await this._handleResponseError(error)

                return
            }

            logger.error({ error, layer: API_LAYER })
        }
    }

    static async _delete(path: string) {
        const options = {
            method: 'DELETE',
            headers: {
                Authorization: this.token,
            },
        }

        try {
            const response = await fetch(`${url}${path}`, options)

            if (this._isResponseError(response)) {
                throw response
            }

            const result = await response.json()

            return result
        } catch (error) {
            if (this._isResponseError(error)) {
                await this._handleResponseError(error)

                return
            }

            logger.error({ error, layer: API_LAYER })
        }
    }

    static async _find(path: string, params: FindInput<string>) {
        const searchParams = new URLSearchParams(params)
        const options = {
            method: 'GET',
            headers: {
                Authorization: this.token,
            },
        }

        try {
            const response = await fetch(
                `${url}${path}?${searchParams}`,
                options,
            )

            if (this._isResponseError(response)) {
                throw response
            }

            const result = await response.json()

            return result
        } catch (error) {
            if (this._isResponseError(error)) {
                await this._handleResponseError(error)

                return
            }

            logger.error({ error, layer: API_LAYER })
        }
    }

    static async _get(path: string) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: this.token,
            },
        }

        try {
            const response = await fetch(`${url}${path}`, options)

            if (this._isResponseError(response)) {
                throw response
            }

            const result = await response.json()

            return result
        } catch (error) {
            if (this._isResponseError(error)) {
                await this._handleResponseError(error)

                return
            }

            logger.error({ error, layer: API_LAYER })
        }
    }

    static async _update(path: string, data: object) {
        const options = {
            method: 'PUT',
            headers: {
                Authorization: this.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        try {
            const response = await fetch(`${url}${path}`, options)

            if (this._isResponseError(response)) {
                throw response
            }

            const result = await response.json()

            return result
        } catch (error) {
            if (this._isResponseError(error)) {
                await this._handleResponseError(error)

                return
            }

            logger.error({ error, layer: API_LAYER })
        }
    }

    static _isResponseError(error: Response) {
        if (
            error.status === 422 ||
            error.status === 401 ||
            error.status === 404
        )
            return true

        return false
    }

    static async _handleResponseError(error: Response) {
        if (error.status === 422) {
            throw new UnprocessableContentError()
        }

        if (error.status === 401) {
            const result = await error.json()

            if ('message' in result) {
                throw new UnauthorizedError(result.message)
            }

            throw new UnauthorizedError()
        }

        if (error.status === 404) {
            throw new NotFoundError()
        }
    }
}

export default Api
