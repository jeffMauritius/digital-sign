import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CardContainer from "./cardContainer"

interface TabContainerProps {
  page?: string
  config: {
    listViewTitle: string
    listViewDescription: string
    tab: {
      label: Record<string, string>
    }
  }
  t: (key: string) => string
}

const TabContainer: React.FC<TabContainerProps> = props => {
  const { config, t } = props
  const { listViewTitle, listViewDescription, tab } = config

  return (
    <div>
      <Tabs defaultValue={"toSign"} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {config &&
            Object.values(tab.label).map((item: string, index: number) => (
              <TabsTrigger key={item} value={item}>
                {t(`dashboard.tabLabels.${item}`)}
              </TabsTrigger>
            ))}
        </TabsList>

        {config &&
          Object.values(tab.label).map((item: string, index: number) => (
            <TabsContent key={index} value={item}>
              <CardContainer config={config} cardID={item} t={t} />
            </TabsContent>
          ))}
      </Tabs>
    </div>
  )
}

export default TabContainer
