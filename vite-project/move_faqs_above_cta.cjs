const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/explore');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to move <FaqSection faqsData={blogFaqs} /> to be above the CTA block.
  // Currently, the file structure looks like:
  //      ...
  //      </div> (closes the text content space-y-8 div)
  //    </article>
  //    <FaqSection faqsData={blogFaqs} />
  //    <FooterSection />
  //
  // Inside the article, we have:
  //    {/* ── CTA BLOCK ── */}
  //    ...
  //    {/* ── AUTHOR BIO ── */}
  //    ...
  //
  // We want to transform it to:
  //      ...
  //      </div> (closes the text content space-y-8 div)
  //    </article>
  //    <FaqSection faqsData={blogFaqs} />
  //    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pb-32">
  //      {/* ── CTA BLOCK ── */}
  //      ...
  //      {/* ── AUTHOR BIO ── */}
  //      ...
  //    </div>
  //    <FooterSection />

  // Let's find the start of the CTA BLOCK
  const ctaStartIndex = content.indexOf('{/* ── CTA BLOCK ── */}');
  
  // Let's find </article>
  const articleCloseIndex = content.indexOf('</article>');
  
  // Let's find <FaqSection faqsData={blogFaqs} />
  const faqIndex = content.indexOf('<FaqSection faqsData={blogFaqs} />');

  if (ctaStartIndex !== -1 && articleCloseIndex !== -1 && faqIndex !== -1) {
    // Extract the CTA + Author Bio content
    // It starts at ctaStartIndex and ends at the closing tag of the article or text div.
    // Wait, the structural tags at the end of the article are:
    //      </div> (closes text div)
    //    </article>
    // So ctaStartIndex is actually inside the article and inside the text div.
    // Let's extract the block of text from ctaStartIndex to the end of the text content, which was originally closed by </div>\n      </article>.
    // Wait, since we closed the article *after* the author bio previously, the file has:
    //    {/* ── CTA BLOCK ── */}
    //    ...
    //    {/* ── AUTHOR BIO ── */}
    //    ...
    //    </div>
    //  </article>
    //  <FaqSection faqsData={blogFaqs} />
    
    // We can extract everything from ctaStartIndex up to "</div>\n      </article>"
    const endMarker = '</div>\n      </article>';
    const endMarkerIndex = content.indexOf(endMarker, ctaStartIndex);
    
    if (endMarkerIndex !== -1) {
      const ctaAndBioBlock = content.substring(ctaStartIndex, endMarkerIndex);
      
      // Now we construct the new content:
      // 1. Everything before ctaStartIndex
      // 2. Close the text div: '</div>'
      // 3. Close the article: '</article>'
      // 4. Render the FAQ: '<FaqSection faqsData={blogFaqs} />'
      // 5. Open the new wrapper: '<div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pb-32">'
      // 6. The CTA and Bio block
      // 7. Close the new wrapper: '</div>'
      // 8. Everything after '<FaqSection faqsData={blogFaqs} />' (excluding the FaqSection call since we moved it)
      
      const part1 = content.substring(0, ctaStartIndex);
      
      // Let's find what is after the <FaqSection faqsData={blogFaqs} />
      const postFaqIndex = faqIndex + '<FaqSection faqsData={blogFaqs} />'.length;
      const part2 = content.substring(postFaqIndex);
      
      content = part1 + 
                '</div>\n      </article>\n\n      <FaqSection faqsData={blogFaqs} />\n\n      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 pb-32">\n        ' + 
                ctaAndBioBlock.trim() + 
                '\n      </div>' + 
                part2;
    }
  }

  fs.writeFileSync(filePath, content);
});

console.log('FAQs moved above the CTA section.');
