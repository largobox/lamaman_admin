export type Props = {
    label: string
    name: string

    initialValue?: string
    error?: string
    onChange?: (value: string) => void
}
