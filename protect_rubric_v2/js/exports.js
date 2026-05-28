function reviewToMarkdown(review, rubric){
  const total = totalScore(review), rec = recommendation(total);
  const lines = [];
  lines.push(`# ${rubric.version} Report`,'');
  lines.push(`**Vendor / Tool:** ${review.meta.vendor || ''}`);
  lines.push(`**Product URL:** ${review.meta.productUrl || ''}`);
  lines.push(`**Reviewer:** ${review.meta.reviewer || ''}`);
  lines.push(`**Organization:** ${review.meta.organization || ''}`);
  lines.push(`**Review Date:** ${review.meta.reviewDate || ''}`);
  lines.push(`**Total Score:** ${total}/14`);
  lines.push(`**Recommended Action:** ${rec.label}`,'');
  lines.push('## Scores','','| # | Category | Score | Auto-Scoring Note |','|---|---|---:|---|');
  rubric.categories.forEach(c=>{
    const row = review.categories?.[c.number] || {};
    lines.push(`| ${c.number} | ${c.code} — ${c.name} | ${row.score ?? ''} | ${String(row.reason||'').replace(/\n/g,'<br>')} |`);
  });
  lines.push('', '## Documents Reviewed');
  lines.push(`- Combined vendor text pasted: ${review.docs.allText || review.docs.privacyPolicy ? 'Yes' : 'No'}`);
  lines.push('', '---', 'Structured first impression only; not legal advice.');
  return lines.join('\n');
}

function reviewToCsv(review, rubric){
  const esc = v => '"' + String(v ?? '').replace(/"/g,'""') + '"';
  const rows = [['#','Code','Category','Score','Auto-Scoring Note']];
  rubric.categories.forEach(c=>{const row=review.categories?.[c.number]||{}; rows.push([c.number,c.code,c.name,row.score||'',row.reason||'']);});
  rows.push(['','','Total',totalScore(review),'']);
  return rows.map(r=>r.map(esc).join(',')).join('\n');
}

async function exportDocx(review, rubric){
  if(!window.docx){ alert('DOCX library did not load. Check your internet connection or use Markdown/PDF.'); return; }
  const {Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, HeadingLevel} = window.docx;
  const total = totalScore(review), rec = recommendation(total);
  const children = [
    new Paragraph({text:`${rubric.version} Report`, heading:HeadingLevel.TITLE}),
    new Paragraph({children:[new TextRun({text:'Vendor / Tool: ',bold:true}), new TextRun(review.meta.vendor||'')]}),
    new Paragraph({children:[new TextRun({text:'Review Date: ',bold:true}), new TextRun(review.meta.reviewDate||'')]}),
    new Paragraph({children:[new TextRun({text:'Total Score: ',bold:true}), new TextRun(`${total}/14 — ${rec.label}`)]}),
    new Paragraph({text:'Scores', heading:HeadingLevel.HEADING_1})
  ];
  const tableRows = [new TableRow({children:['#','Category','Score','Auto-Scoring Note'].map(h=>new TableCell({children:[new Paragraph({children:[new TextRun({text:h,bold:true})]})]}))})];
  rubric.categories.forEach(c=>{
    const row=review.categories?.[c.number]||{};
    tableRows.push(new TableRow({children:[String(c.number),`${c.code} — ${c.name}`,String(row.score||''),row.reason||''].map(x=>new TableCell({children:[new Paragraph(String(x))]}))}));
  });
  children.push(new Table({width:{size:100,type:WidthType.PERCENTAGE}, rows:tableRows}));
  children.push(new Paragraph('Structured first impression only; not legal advice.'));
  const doc = new Document({sections:[{properties:{},children}]});
  const blob = await Packer.toBlob(doc);
  downloadFile(`${slugify(review.meta.vendor)}-protect-report.docx`, blob);
}

async function exportPdf(elementId='reportView'){
  const el = document.getElementById(elementId) || document.body;
  if(window.html2pdf){
    const opt = {margin:.35, filename:'protect-rubric-report.pdf', image:{type:'jpeg',quality:.98}, html2canvas:{scale:2}, jsPDF:{unit:'in',format:'letter',orientation:'portrait'}};
    await html2pdf().set(opt).from(el).save();
  } else window.print();
}
