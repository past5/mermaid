import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
// Mock API to send the mermaid diagram string
app.get('/api/diagram', (req, res) => {
    const diagram = {
        "mermaid": `graph TB
        A["Lead Creation"]
        A -->|Create a Salesforce Account| B["Create a Salesforce Contact"]
        B --> C["Lead Engagement"]
        C --> |Navigate to a webpage| D["Enter value into field (FirstName, LastName, Email, Company)"]
        D -->|Submit a form by clicking a button| E["Lead Qualification"]
        E --> |Check a field on a Marketo Lead| F["Navigate to a webpage"]
        F --> G["Opportunity Creation"]
        G --> |Create a Salesforce Opportunity| H["Create a Salesforce Object (OpportunityContactRole)"]
        H --> I["Opportunity Closure"]
        I --> |Update a Salesforce Object| J["Update a Salesforce Object (Account)"]
        I --> |Update a Salesforce Object| J["Update a Salesforce Object (Opportunity)"]
        I --> |Check a field on a Salesforce Contact| J
        J --> K["Cleanup"]
        K --> |Delete a Salesforce Object| L["End"]`
    }
    res.json(diagram);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
