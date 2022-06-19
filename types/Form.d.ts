import ICard from './Card'

type IForm = Pick<ICard, 'title' | 'content' | 'url'>

export default IForm
