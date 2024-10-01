function generateRandomEmail(): string {
  const domains = ["example.com", "test.com", "demo.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const randomUser = Math.random().toString(36).substring(2, 11);
  return `${randomUser}@${randomDomain}`;
}

function generateRandomTitle(): string {
  const titles = ["my doc.pdf", "report.pdf", "invoice.pdf", "summary.pdf", "notes.pdf"];
  return titles[Math.floor(Math.random() * titles.length)];
}

function generateRandomAction(): string {
  const titles = ["Sign", "Edit", "Download"];
  return titles[Math.floor(Math.random() * titles.length)];
}

export const documents = Array.from({ length: 50 }, (_, index) => ({
  id: (index + 1).toString(),
  created: `2023-01-${String(index + 1).padStart(2, '0')}`,
  title: generateRandomTitle(),
  recipient: generateRandomEmail(),
  status: index % 5 === 0 ? "Completed" : index % 7 === 0 ? "Draft" : index % 11 === 0 ? "Inbox" : "Pending",
  actions: generateRandomAction()
}));
