import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CardContainer from "./cardContainer"

const TabContainer = (data: any) => {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">A signer</TabsTrigger>
        <TabsTrigger value="tab2">En attente</TabsTrigger>
        <TabsTrigger value="tab3">Brouillons</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <CardContainer
          title="Documents à signer"
          description="Veuillez signer les documents en attente"
          footerDescription="Description du footer"
          {...data}
        />
      </TabsContent>
      <TabsContent value="tab2">
        <CardContainer
          title="Documents envoyés pour signature"
          description="Voici la liste des documents en attente de signature"
          footerDescription="Description du footer"
          {...data}
        />
      </TabsContent>
      <TabsContent value="tab3">
        <CardContainer
          title="Vos brouillons"
          description="Voici la liste de vos brouillons"
          footerDescription="Description du footer"
          {...data}
        />
      </TabsContent>
    </Tabs>
  )
}

export default TabContainer
