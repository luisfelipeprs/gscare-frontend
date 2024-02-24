import { Avatar, Button } from "@radix-ui/themes";
import { InputLabel, UserInfo, Container } from "./styled";

function UserProfile() {

    return (
        <>
            <Container>
                <Avatar
                    size="9"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                    radius="full"
                />
                <UserInfo >
                    <p>Imagem de perfil</p>
                    <p>Sua imagem deve ter no máximo 250x250px e 1MB.</p>
                    <Button variant="outline" highContrast>
                        Edit profile
                    </Button>
                </UserInfo>
            </Container>
        </>
    );
}

export default UserProfile;
