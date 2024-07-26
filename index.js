import { Client } from "@notionhq/client";

const NOTION_KEY = "";

const notion = new Client({ auth: NOTION_KEY });

const databaseId = "";

let service = "Facebook";

let mail = "abc@outlook.com";

let password = "";

async function addItem(service, mail, password) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Service: {
          title: [
            {
              text: {
                content: service,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: {
                content: mail,
              },
            },
          ],
        },
        Password: {
          rich_text: [
            {
              text: {
                content: password,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("Success");
  } catch (error) {
    console.log(error.body);
  }
}

addItem(service, mail, password);

