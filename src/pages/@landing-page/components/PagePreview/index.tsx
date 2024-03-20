import { CaixaRecursos, CaixaRecursosText, CaixaSpan, Spans } from "./styled"

interface IProps {
  title: string;
  description: string;
}

export const PagePreview = ({ title, description }: IProps) => {
  return (
    <>

      <CaixaRecursos>

        <CaixaRecursosText>
          <div>
            <h1>{title}</h1>
          </div>
          <CaixaSpan>
            <Spans>{description}</Spans>
          </CaixaSpan>


        </CaixaRecursosText>
      </CaixaRecursos>
    </>
  )
}
