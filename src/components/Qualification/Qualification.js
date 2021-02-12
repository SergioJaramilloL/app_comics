import { 
  Content,
  ContentStars,
  Input,
  Star
 } from './QualificationStyles';

export function Qualification() {
  return(
    <Content>
      <ContentStars>
        <Input id="radio1" type="radio" name="stars" value="5"/>
          <Star for="radio1">★</Star>
        <Input id="radio2" type="radio" name="stars" value="4"/>
          <Star for="radio2">★</Star>
        <Input id="radio3" type="radio" name="stars" value="3"/>
          <Star for="radio3">★</Star>
        <Input id="radio4" type="radio" name="stars" value="2"/>
          <Star for="radio4">★</Star>
        <Input id="radio5" type="radio" name="stars" value="1"/>
          <Star for="radio5">★</Star>
      </ContentStars>
    </Content>
  )
}
