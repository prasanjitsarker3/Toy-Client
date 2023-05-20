import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Invention Science | ${title} `
    }, [title])
}
export default useTitle;