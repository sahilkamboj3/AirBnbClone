import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class ListingType {
    @Field()
    propertyType: string

}
