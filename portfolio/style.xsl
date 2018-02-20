<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:variable name='space'><xsl:text> </xsl:text></xsl:variable>

    <xsl:output 
        method="html" 
        encoding="UTF-8" 
        indent="yes" 
        doctype-public="-//W3C//DTD HTML 4.01//EN" 
        doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>

    <xsl:template match="/contacts">
        <html>
            <body>
                <h1>Contacts</h1>
                <xsl:choose>
                    <xsl:when test="count(contact) &gt; 0">
                        <xsl:for-each select="contact">
                            <xsl:sort select="last-name"/>
                            <xsl:apply-templates select="."/>
                        </xsl:for-each>
                    </xsl:when>
                    <xsl:otherwise>
                        <h2>No records found.</h2>
                    </xsl:otherwise>
                </xsl:choose>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="/contacts/contact">
        <h2>
            <xsl:value-of select="concat(first-name,$space)"/>
            <xsl:choose>
                <xsl:when test="middle-name != ''">
                    <xsl:value-of select="concat(middle-name,$space)"/>
                </xsl:when>
            </xsl:choose>
            <xsl:value-of select="last-name"/>
        </h2>
        <xsl:choose>
            <xsl:when test="count(email|phone|web|other-contact) &gt; 0">
                <h3>Contacts:</h3>
                <xsl:for-each select="email|phone|web|other-contact">
                    <xsl:apply-templates select="."/>
                </xsl:for-each>
            </xsl:when>
        </xsl:choose>
        <xsl:choose>
            <xsl:when test="count(address) &gt; 0">
                <h3>Addresses:</h3>
                    <xsl:for-each select="address">
                        <xsl:apply-templates select="."/>
                    </xsl:for-each>
            </xsl:when>
        </xsl:choose>
        <xsl:choose>
            <xsl:when test="count(note) &gt; 0">
                <h3>Notes:</h3>
                    <xsl:for-each select="note">
                        <xsl:apply-templates select="."/>
                    </xsl:for-each>
            </xsl:when>
        </xsl:choose>
        <br/>
    </xsl:template>

    <xsl:template match="/contacts/contact/email">
        <xsl:text>Email</xsl:text>
        <xsl:choose>
                <xsl:when test="@type != ''">
                    <xsl:text>(</xsl:text>
                    <xsl:value-of select="@type"/>
                    <xsl:text>)</xsl:text>
                </xsl:when>
            </xsl:choose>
        <xsl:text>: </xsl:text>
        <a href="mailto:{address}"><xsl:value-of select="address"/></a>
        <br/>
    </xsl:template>

    <xsl:template match="/contacts/contact/phone">
        <xsl:text>Phone</xsl:text>
        <xsl:choose>
                <xsl:when test="@type != ''">
                    <xsl:text>(</xsl:text>
                    <xsl:value-of select="@type"/>
                    <xsl:text>)</xsl:text>
                </xsl:when>
            </xsl:choose>
        <xsl:text>: </xsl:text>
        <xsl:value-of select="address"/>
        <br/>
    </xsl:template>

    <xsl:template match="/contacts/contact/web">
        <xsl:text>Web</xsl:text>
        <xsl:choose>
                <xsl:when test="@type != ''">
                    <xsl:text>(</xsl:text>
                    <xsl:value-of select="@type"/>
                    <xsl:text>)</xsl:text>
                </xsl:when>
            </xsl:choose>
        <xsl:text>: </xsl:text>
        <a href="{address}"><xsl:value-of select="address"/></a>
        <br/>
    </xsl:template>

    <xsl:template match="/contacts/contact/other-contact">
        <xsl:value-of select="service"/>
        <xsl:choose>
                <xsl:when test="@type != ''">
                    <xsl:text>(</xsl:text>
                    <xsl:value-of select="@type"/>
                    <xsl:text>)</xsl:text>
                </xsl:when>
            </xsl:choose>
        <xsl:text>: </xsl:text>
        <xsl:choose>
            <xsl:when test="matches(address,'[^@]+@[^\.]+\.\w+')">
                <a href="mailto:{address}"><xsl:value-of select="address"/></a>
            </xsl:when>
            <xsl:when test="matches(address,'(http(s?)://)?((www\.)?)(\w+\.)+.+')">
                <a href="{address}"><xsl:value-of select="address"/></a>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="address"/>
            </xsl:otherwise>
        </xsl:choose>
        <br/>
    </xsl:template>

    <xsl:template match="/contacts/contact/address">
        <xsl:value-of select="concat(street,$space,house-number)"/>
        <xsl:text>, </xsl:text>
        <xsl:value-of select="postal-code"/>
        <xsl:text>, </xsl:text>
        <xsl:value-of select="city"/>
        <xsl:text>, </xsl:text>
        <xsl:value-of select="state"/>
        <br/>
    </xsl:template>

    <xsl:template match="/contacts/contact/note">
        <pre><xsl:value-of select="."/></pre>
        <hr/>
        <br/>
    </xsl:template>

</xsl:transform>
