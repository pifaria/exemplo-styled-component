import Button from "../../components/button";
import { Container, Content } from "./styles";
import { toast } from "react-toastify";

const Home = () => {
    const handleSucess = () => {
        toast.success("Deu certo!")
    }

    const handleError = () => {
        toast.error("Deu ruim!")
    }

    return(
        <Container>
            <Content>
                <header>
                    <h1>Título</h1>
                    <input placeholder="pesquisa"/>
                </header>
                <section>
                    <Button onClick={handleSucess}>Toast de sucesso</Button>
                    <Button onClick={handleError} whiteSchema>Toast de erro</Button>
                </section>
            </Content>
        </Container>
    )
}

export default Home